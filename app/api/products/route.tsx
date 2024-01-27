import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
// interface Props {
//   params: { id: number };
// }

export function GET(request: NextRequest) {
  return NextResponse.json({ id: 1, name: "Noodles" });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  // if (!body.name)
  //   return NextResponse.json(
  //     { error: "Product name required" },
  //     { status: 404 }
  //   );
  return NextResponse.json(body, { status: 201 });
}
