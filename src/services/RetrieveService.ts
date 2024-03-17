import { RetrieveParams } from "../@types/Retrieve";
import AWS from "aws-sdk";
import { AWS_CONFIG } from "../utils/config";

const s3 = new AWS.S3({
  region: AWS_CONFIG.S3_REGION,
  logger: undefined,
  credentials: {
    accessKeyId: AWS_CONFIG.AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_CONFIG.AWS_SECRET_ACCESS_KEY_ID,
  },
});

export async function Retrieve({ key }: RetrieveParams) {
  return s3
    .getObject({
      Bucket: AWS_CONFIG.S3_BUCKET as string,
      Key: key,
    })
    .promise();
}
