import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import { json } from "stream/consumers";

interface Props {
  params: { id: number };
}
export function GET(request: NextRequest, { params: { id } }: Props) {
  if (id > 10)
    return NextResponse.json({ Error: "User not found." }, { status: 404 });
  return NextResponse.json({ id: 1, name: "Mosh" });
}

export async function PUT(request: NextRequest, { params: { id } }: Props) {
  const body = await request.json();
  // if (!body.name)
  //   return NextResponse.json({ error: "Name is required" }, { status: 400 });

  //validation using zod

  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  if (id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  return NextResponse.json({ id: 1, name: "Mosh" });
}

export function DELETE(request: NextRequest, { params: { id } }: Props) {
  if (id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  return NextResponse.json({}, { status: 204 });
}
