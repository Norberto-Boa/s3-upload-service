require("dotenv").config();

interface AWS_CONFIG {
  AWS_SECRET_ACCESS_KEY_ID: string;
  AWS_ACCESS_KEY_ID: string;
  S3_REGION: string;
  S3_BUCKET: string;
}

const AWS_CONFIG: AWS_CONFIG = {
  AWS_SECRET_ACCESS_KEY_ID: process.env.AWS_SECRET_ACCESS_KEY_ID as string,
  AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID as string,
  S3_REGION: process.env.S3_REGION as string,
  S3_BUCKET: process.env.S3_BUCKET as string,
};

export { AWS_CONFIG };
