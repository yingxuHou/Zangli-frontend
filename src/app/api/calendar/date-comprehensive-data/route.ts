import { NextRequest, NextResponse } from "next/server";

function getBackendApiBase(): string {
  const fromEnv = process.env.BACKEND_API_BASE || process.env.NEXT_PUBLIC_API_BASE;
  if (fromEnv && /^https?:\/\//.test(fromEnv)) {
    return fromEnv.replace(/\/$/, "");
  }
  return "https://zangli-backend-api.zeabur.app/api";
}

export async function POST(request: NextRequest) {
  try {
    const backendApiBase = getBackendApiBase();
    const bodyText = await request.text();

    const backendResponse = await fetch(`${backendApiBase}/calendar/date-comprehensive-data`, {
      method: "POST",
      headers: {
        "Content-Type": request.headers.get("content-type") || "application/json",
      },
      body: bodyText,
    });

    const contentType = backendResponse.headers.get("content-type") || "";
    const responseText = await backendResponse.text();

    return new NextResponse(responseText, {
      status: backendResponse.status,
      headers: {
        "Content-Type": contentType.includes("application/json") ? "application/json" : contentType || "text/plain",
      },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json(
      { success: false, error: { message } },
      { status: 500 }
    );
  }
}

