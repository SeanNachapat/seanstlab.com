import { NextRequest, NextResponse } from "next/server";
import { detectLocation } from "@/lib/geo";
import { getVisitorStats, recordNewVisit } from "@/lib/visitorStorage";

export const dynamic = "force-dynamic";

const SESSION_COOKIE_NAME = "seanstlab_visitor_session";
const SESSION_MAX_AGE = 60 * 60 * 24; // 24 hours

export async function GET(req: NextRequest) {
  try {
    const existingSession = req.cookies.get(SESSION_COOKIE_NAME)?.value;

    if (existingSession) {
      const stats = await getVisitorStats();
      return NextResponse.json({
        totalVisitors: stats.totalVisitors,
        previousVisitor: stats.previousVisitor || stats.currentVisitor,
        isNew: false,
      });
    }

    // New visitor session detected
    const location = await detectLocation(req.headers);
    const result = await recordNewVisit(location);

    const newSessionId = crypto.randomUUID();
    const response = NextResponse.json({
      totalVisitors: result.totalVisitors,
      previousVisitor: result.previousVisitor,
      isNew: true,
    });

    response.cookies.set({
      name: SESSION_COOKIE_NAME,
      value: newSessionId,
      maxAge: SESSION_MAX_AGE,
      path: "/",
      httpOnly: true,
      sameSite: "lax",
    });

    return response;
  } catch (error) {
    console.error("Error in /api/visitors:", error);
    // Graceful fallback response on error
    return NextResponse.json(
      {
        totalVisitors: 1,
        previousVisitor: {
          formatted: "Bangkok, Thailand",
          flag: "🇹🇭",
        },
        isNew: false,
      },
      { status: 200 }
    );
  }
}

export async function POST(req: NextRequest) {
  return GET(req);
}
