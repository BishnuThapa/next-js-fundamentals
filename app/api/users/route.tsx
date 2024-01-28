import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";

// GET AND POST INTO DB USING PRISMA CLIENT
export async function GET(request: NextRequest) {
    const users = await prisma.user.findMany()
    // const users = await prisma.user.findMany({
    //     where:{
    //         email:''
    //     }
    // })
    return NextResponse.json(users)
  
}




// export function GET(request: NextRequest) {
//   // fetch users/ products etc.. from database
//   return NextResponse.json("ok");
// }


export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = schema.safeParse(body);
    if (!validation.success)
        return NextResponse.json(validation.error.errors, { status: 400 });
    
    const user = await prisma.user.findUnique({
        where: { email: body.email }
    })
    if (user)
        return NextResponse.json({error:'user already exist.'},{status:400})
    const newUser=await prisma.user.create({
        data: {
            name: body.name,
            email:body.email
        }
    })
    return NextResponse.json(user,{status:201})
     
}



// export async function POST(request: NextRequest) {
//   const body = await request.json();
//   // if (!body.name)
//   //   return NextResponse.json({ Error: "Name is required" }, { status: 400 });

//   // validation using zod schema
//   const validation = schema.safeParse(body);
//   if (!validation.success)
//     return NextResponse.json(validation.error.errors, { status: 400 });
//   return NextResponse.json(body, { status: 201 });
// }





