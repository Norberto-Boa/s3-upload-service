import { Router } from "express";
import { UploadController } from "../controllers/uploadController";
import path from "path";

const router = Router();

const upload = new UploadController();

router.post("/upload", upload.upload);

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
});

export { router };
