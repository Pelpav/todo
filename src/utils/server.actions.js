"use server";
import { redirect } from "next/navigation";
import prisma from "../../prisma/db";

export async function createUser(formData) {
  const { email, password } = formData;
  try {
    const prismaOp = await prisma.user.create({
      data: {
        email,
        password,
      },
    });
    return { success: true };
  } catch (error) {
    console.error(error.code);
    return { success: false };
  }
}
export async function loginUser(formData) {
  const { email, password } = formData;
  try {
    const prismaOp = await prisma.user.findUnique({
      where: {
        email,
        password,
      },
    });
      
    return { success: true , user: prismaOp};
  } catch (error) {
    console.error(error);
    return { success: false };
  }
}
