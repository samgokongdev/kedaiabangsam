import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export const POST = async (request) => {
  const cart = await prisma.cart.create({
    data: {
      status: Boolean(true),
    },
  });
  return NextResponse.json({ cart });
};
