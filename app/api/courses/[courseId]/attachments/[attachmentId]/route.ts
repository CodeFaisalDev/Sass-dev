import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function DELETE(req: Request, {params} : {params: {courseId: string, attachmentId: string}}) {
    try {
        const { userId } = auth()
        
        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const courseOwner = await db.course.findUnique({
            where: {
                userId : userId,
                id: params.courseId,
            }
        })

        if (!courseOwner) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const attachment = await db.attachment.delete({
            where: {
                id: params.attachmentId,
                courseId : params.courseId
            }
        })

        // if(!attachment) {
        //     return new NextResponse("Not Found", { status: 404 });
        // }

        return NextResponse.json(attachment);

    } catch (error) {
        console.log("ATTACHMENT_ID", error);
        return new NextResponse("Internal Error", { status: 500 })     
    }
}