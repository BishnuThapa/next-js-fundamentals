import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

export function GET(request: NextRequest) {
  // fetch users/ products etc.. from database
  return NextResponse.json("ok");
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  // if (!body.name)
  //   return NextResponse.json({ Error: "Name is required" }, { status: 400 });

  // validation using zod schema
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  return NextResponse.json(body, { status: 201 });
}
