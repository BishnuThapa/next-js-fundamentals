import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";

interface Props {
  params: { id: string };
}
export async function GET(request: NextRequest, { params: { id } }: Props) {
  const user = await prisma.user.findUnique({
    where: { id: parseInt(id) },
  });
  if (!user)
    return NextResponse.json({ error: "user not found" }, { status: 404 });
  return NextResponse.json(user);

  // if (id > 10)
  //   return NextResponse.json({ Error: "User not found." }, { status: 404 });
  // return NextResponse.json({ id: 1, name: "Mosh" });
}

export async function PUT(request: NextRequest, { params: { id } }: Props) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  const user = await prisma.user.findUnique({
    where: { id: parseInt(id) },
  });
  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  const updatedUser = await prisma.user.update({
    where: { id: user.id },
    data: {
      name: body.name,
      email: body.email,
    },
  });
  return NextResponse.json(updatedUser);
}

// export async function PUT(request: NextRequest, { params: { id } }: Props) {
//   const body = await request.json();
//   // if (!body.name)
//   //   return NextResponse.json({ error: "Name is required" }, { status: 400 });

//   //validation using zod

//   const validation = schema.safeParse(body);
//   if (!validation.success)
//     return NextResponse.json(validation.error.errors, { status: 400 });

//   if (parseInt(id) > 10)
//     return NextResponse.json({ error: "User not found" }, { status: 404 });
//   return NextResponse.json({ id: 1, name: "Mosh" });
// }

export async function DELETE(request: NextRequest, { params: { id } }: Props) {
  const user=await prisma.user.findUnique({
    where:{id:parseInt(id)}
  })
  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  await prisma.user.delete({
    where:{id:user.id}
  })
  return NextResponse.json({});
}

// export function DELETE(request: NextRequest, { params: { id } }: Props) {
//   if (parseInt(id) > 10)
//     return NextResponse.json({ error: "User not found" }, { status: 404 });
//   return NextResponse.json({});
// }
