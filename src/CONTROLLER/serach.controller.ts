import type { Request, Response } from "express";
import { SucessApi } from "../UTILITES/sucess.api.ts";
import { ErrorApi } from "../UTILITES/error.api.ts";
import { prisma } from "../DB/db.ts";

const SerachBar = async (req: Request, res: Response) => {
  try {
    const { subject } = req.query;
    console.log('query',subject)

    if (!subject && typeof subject !== "string" ) {
      return res.status(400).json(
        new ErrorApi("no text provided", 400, {
          info: "text is not provided by user  or it not a stiring ",
        })
      );  
    }
    
    const notefind = await prisma.note.findMany({
      where: {
        subject: {
          contains:subject as string ,
          mode: "insensitive",
        },
      },
      select: {
        title: true,
        subject: true,
        forsem: true,
        forstream: true,
        fileurl: true,
        createdAt: true,
        uploader: {
          select: {
            username: true,
            avatarUrl: true,
            level:true
          },
          
        },
      },
     orderBy:{
        uploader:{
            level:"desc"
        }
     }
      
    });

    if(!notefind){
       return res.status(404).json(
        new ErrorApi("notes not found", 404, {
          info: "no notes found ",
        })
       )
    }

    return res.status(200).json(
      new SucessApi("notes found", 200, {
        data: notefind,
      })
    );
  } catch (error) {
    console.log(error);
    return res.status(500).json(
      new ErrorApi("something went wrong ", 500, {
        info: "search service crashed ",
        reason: error,
      })
    );
  }
};

export { SerachBar };
