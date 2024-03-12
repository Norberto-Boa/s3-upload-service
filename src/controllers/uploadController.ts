import { Request, Response } from "express";
import { upload } from "../services/UploadService";

export class UploadController {
  async upload(req: Request, res: Response) {
    const file = req.file as Express.Multer.File;

    const bucket = process.env.S3_BUCKET as string;

    try {
      const uploaded = await upload({
        key: file.originalname,
        contentType: file.mimetype,
        body: file.buffer,
        bucket: bucket,
      });


      res.status(200).send("File uploaded successfully!");
    } catch (e) {
      console.log(e);
      res.status(500).send("Bad Request!");
    }
  }
}
