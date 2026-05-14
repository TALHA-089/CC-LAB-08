export const runtime = "edge";

import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const country = req.headers.get("x-vercel-ip-country") || "Only available on production";
  const city = req.headers.get("x-vercel-ip-city") || "Test on your deployed URL";

  return NextResponse.json({
    country,
    city,
    runtime: "edge"
  });
}