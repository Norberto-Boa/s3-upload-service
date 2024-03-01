import { S3 } from "aws-sdk";
import { UploadParams } from "../@types/Upload";

export class UploadService {
  s3;

  constructor() {
    this.s3 = new S3();
  }

  async upload({ body, bucket, key, contentType }: UploadParams) {
    return await this.s3.upload({
      Body: body,
      Bucket: bucket,
      Key: key,
      ContentType: contentType,
    }).promise();
  }
}
