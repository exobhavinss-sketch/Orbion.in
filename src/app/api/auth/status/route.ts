import { isDatabaseConfigured } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const configured = isDatabaseConfigured();
  return NextResponse.json({
    configured,
    status: configured ? "ready" : "database_unconfigured",
    message: configured
      ? "Authentication database service is operational."
      : "Server-side database configuration is not enabled for this deployment.",
  });
}
