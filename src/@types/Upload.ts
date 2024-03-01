export interface UploadParams {
  bucket: string;
  key: string;
  body: Buffer;
  contentType: string;
}
