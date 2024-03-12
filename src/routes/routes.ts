import { Router } from "express";
import { UploadController } from "../controllers/UploadController";
import path from "path";
import multer from "multer";
import { multerUpload } from "../middleware/FileMiddleware";
import { RetrieveController } from "../controllers/RetrieveController";

const router = Router();

const upload = new UploadController();

router.post("/upload", multerUpload.single("file"), upload.upload);

router.get("/retrieve/:key", RetrieveController);

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
});

export { router };
