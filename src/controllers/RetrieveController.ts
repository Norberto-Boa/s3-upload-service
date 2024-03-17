import { Request, Response } from "express";
import { Retrieve } from "../services/RetrieveService";

export const RetrieveController = async (req: Request, res: Response) => {
  const { key } = req.params;

  try {
    const { Body, ContentType } = await Retrieve({ key });

    if (Body) {
      if (ContentType === "application/pdf") {
        res.setHeader("Content-disposition", `attachment; filename=${key}`);
      } else if (
        ContentType === "image/jpg" ||
        ContentType === "image/jpeg" ||
        ContentType === "image/png"
      ) {
        res.setHeader("Content-disposition", `inline; filename=${key}`);
      }
      res.setHeader("Content-Type", ContentType ?? "application/pdf");

      res.send(Body);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Bad Request!");
  }
};
