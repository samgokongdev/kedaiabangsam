import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async (request) => {
  const products = await prisma.product.findMany({
    where: {
      rec: true,
    },
  });
  return NextResponse.json({ products });
};
