import { getCourses } from "@/actions/get-courses";
import GetDashoardCources from "@/actions/get-dashoard-cources";
import CoursesList from "@/components/courses-list";
import { auth } from "@clerk/nextjs/server";
import { CheckCircle, Clock } from "lucide-react";
import { redirect } from "next/navigation";
import InfoCard from "./_components/inof-card";

export default async function Dashoard() {
  const { userId } = auth();

  if (!userId) {
    return redirect("/sign-in");
  }

  const { completedCources, coursesInProgress } = await GetDashoardCources(
    userId
  );

  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InfoCard
          variant="default"
          icon={Clock}
          label="In Progress"
          numberOfItems={coursesInProgress.length}
        />
        <InfoCard
          variant="secondary"
          icon={CheckCircle}
          label="Completed"
          numberOfItems={completedCources.length}
        />
      </div>
      <CoursesList items={[...coursesInProgress, ...completedCources]} />
    </div>
  );
}
