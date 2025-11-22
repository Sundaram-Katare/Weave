import { NextResponse, NextRequest } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
    try {
        // Get authenticated user session
        const session = await getServerSession(authOptions);
        
        if (!session || !session.user?.email) {
            return NextResponse.json(
                { error: "Unauthorized" },
                { status: 401 }
            );
        }

        // Get user from database
        const user = await prisma.user.findUnique({
            where: { email: session.user.email },
            include: {
                letters: {
                    orderBy: { createdAt: "desc" }
                },
            },
        });

        if (!user) {
            return NextResponse.json(
                { error: "User not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(user.letters);
    } catch (error) {
        console.error("Error fetching letters:", error);
        return NextResponse.json(
            { error: "Failed to fetch letters" },
            { status: 500 }
        );
    }
}