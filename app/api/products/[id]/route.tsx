import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

interface Props {
  params: { id: number };
}

export function GET(request: NextRequest, { params: { id } }: Props) {
  if (id > 10)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  return NextResponse.json({ id: 1, name: "Current Noodles" });
}

export async function PUT(request: NextRequest, { params: { id } }: Props) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  // if (!body.name)
  //   return NextResponse.json(
  //     { error: "Product name required" },
  //     { status: 400 }
  //   );
  if (id > 10)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  return NextResponse.json({ id: 1, name: "RUM-PUM" }, { status: 200 });
}

export function DELETE(request: NextRequest, { params: { id } }: Props) {
  if (id > 10)
    return NextResponse.json(
      { error: "Product not found with this id" },
      { status: 404 }
    );
  return NextResponse.json({});
}
