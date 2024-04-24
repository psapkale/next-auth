import { NextRequest, NextResponse } from "next/server";

export function GET(
   req: NextRequest,
   { params }: { params: { authRoutes: string[] } }
) {
   console.log(params.authRoutes);

   return NextResponse.json({
      message: "asd",
   });
}

export function POST() {
   return NextResponse.json({
      message: "asd",
   });
}
