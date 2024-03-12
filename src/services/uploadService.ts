import { UploadParams } from "../@types/Upload";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const s3 = new S3Client({
  region: process.env.S3_REGION as string,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY_ID as string,
  },
});

export async function upload({ body, bucket, key, contentType }: UploadParams) {
  const command = new PutObjectCommand({
    Bucket: bucket,
    Key: key,
    ContentDisposition: "attachment",
    Body: body,
    ContentType: contentType,
  });

  return await s3.send(command);
}
