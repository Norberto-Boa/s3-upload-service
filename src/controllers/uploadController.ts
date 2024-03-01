import { Request, Response } from "express";
import { UploadService } from "../services/uploadService";

export class UploadController {
  async upload(req: Request, res: Response) {
    const file = req.file as Express.Multer.File;

    const uploadService = new UploadService();

    try {
      uploadService.upload({
        key: file.originalname,
        contentType: file.mimetype,
        body: file.buffer,
        bucket: "Hjsndcl",
      });

      res.status(200).send("File uploaded successfully!");
    } catch (e) {
      console.log(e);
      res.status(500).send("Bad Request!");
    }
  }
}
