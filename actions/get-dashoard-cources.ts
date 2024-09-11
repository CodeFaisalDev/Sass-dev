import { db } from "@/lib/db";
import { Category, Course, Chapter } from "@prisma/client";
import { getProgress } from "./get-progress";

type CourseWithProgressWithCategory = Course & {
  category: Category;
  chapters: Chapter[];
  progress: number | null;
};

type DashoardCources = {
  completedCources: CourseWithProgressWithCategory[];
  coursesInProgress: CourseWithProgressWithCategory[];
};

const GetDashoardCources = async (userId: string): Promise<DashoardCources> => {
  try {
    const purchasedCources = await db.purchase.findMany({
      where: {
        userId: userId,
      },
      select: {
        course: {
          include: {
            category: true,
            chapters: {
              where: {
                isPublished: true,
              },
            },
          },
        },
      },
    });

    const courses = purchasedCources.map(
      (purchase) => purchase.course
    ) as CourseWithProgressWithCategory[];

    for (let course of courses) {
      const progress = await getProgress(userId, course.id);
      course["progress"] = progress;
    }

    const completedCources = courses.filter(
      (course) => course.progress === 100
    );
    const coursesInProgress = courses.filter(
      (course) => course.progress !== 100
    );

    return {
      completedCources,
      coursesInProgress,
    };
  } catch (error) {
    console.log("[GET_DASHOARD_COURCES]", error);
    return {
      completedCources: [],
      coursesInProgress: [],
    };
  }
};

export default GetDashoardCources;
