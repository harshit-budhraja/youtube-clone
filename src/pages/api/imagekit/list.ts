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
  // imagekit.listFiles
  // path: "/YoutubeClone",
  // sort: "DESC_CREATED"

  // To send object containing: id, thumbnailUrl using imagekit.url(path/ik-thumbnail.jpg)
  // and queryParameters: { updatedAt: new Date(file.updatedAt).getTime().toString() }
  // url, title, description, duration, createdAt
  res.status(200).json([]);
}
