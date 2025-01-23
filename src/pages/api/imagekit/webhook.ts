import ImageKit from "imagekit";
import type { NextApiRequest, NextApiResponse } from "next";

const imagekit = new ImageKit({
  publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY!,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY!,
  urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = req.body;

  const fileId = body.data.fileId;

  // TODO:
  // Implement webhook here
  // Whenever the webhook is received, update the file details with AbsReady: true
  // imagekit.updateFileDetails(fileId, { customMetadata: { AbsReady: true } })

  res.status(200).json({ success: true });
}
