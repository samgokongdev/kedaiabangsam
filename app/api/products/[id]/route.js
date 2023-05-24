import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async (request, { params }) => {
  //   return NextResponse.json({ id });
  const products = await prisma.product.findFirst({
    where: {
      id: Number(params.id),
    },
  });
  return NextResponse.json({ products });
};
