import { request } from "https";
import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  // fetch users/ products etc.. from database
  return NextResponse.json("ok");
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  if (!body.name)
    return NextResponse.json({ Error: "Name is required" }, { status: 400 });
  return NextResponse.json(body, { status: 201 });
}


