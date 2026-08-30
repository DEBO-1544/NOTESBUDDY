import type { Request, Response } from "express";
import { ErrorApi } from "../UTILITES/error.api.ts";
import { SucessApi } from "../UTILITES/sucess.api.ts";
import { prisma } from "../DB/db.ts";
const NewUser = async (req: Request, res: Response) => {
  try {
    const { clerkid, username, name, email } = req.body;

    const Isuser = await prisma.user.findUnique({
      where: {
        clerkid,
      },select:{
         onboarding:true,
      }
    });
    if (Isuser) {
      return res.status(201).json(
        new SucessApi("user found", 201, {
          user: Isuser,
        }),
      );
    }
    const RegisterUser = await prisma.user.create({
      data: {
        clerkid,
        username,
        email,
        name,
      },
      select: {
        username: true,
        name: true,
      },
    });

    return res.status(200).json(
      new SucessApi("user created", 200, {
        info: "usercreatedsuccesfully",
        data: RegisterUser,
      }),
    );
  } catch (error) {
     console.log(error)
    res.status(500).json(
      new ErrorApi("user creation failed", 500, {
        info: error,
      }),
    );
  }
};

export { NewUser };
