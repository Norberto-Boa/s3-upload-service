import { RetrieveParams } from "../@types/Retrieve";
import AWS from "aws-sdk";

const s3 = new AWS.S3({
  region: process.env.S3_REGION as string,
  logger: undefined,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY_ID as string,
  },
});

export async function Retrieve({ key }: RetrieveParams) {
  return s3
    .getObject({
      Bucket: process.env.S3_BUCKET as string,
      Key: key,
    })
    .promise();
}
