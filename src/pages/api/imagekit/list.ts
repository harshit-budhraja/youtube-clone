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
  const files = await imagekit.listFiles({
    path: "/YoutubeClone",
    sort: "DESC_CREATED"
  });

  // To send object containing: id, thumbnailUrl using imagekit.url(path/ik-thumbnail.jpg)
  // and queryParameters: { updatedAt: new Date(file.updatedAt).getTime().toString() }
  // url, title, description, duration, createdAt
  // TODO: Update thumbnailUrl to use imagekit.url
  res.status(200).json(
    files.map((file) => ({
      id: file.fileId,
      thumbnailUrl: "https://placehold.co/800X400.webp?text=Video%20thumbnail%20goes%20here",
      // thumbnailUrl: imagekit.url({
      //   path: `${file.filePath}/ik-thumbnail.jpg`,
      //   queryParameters: {
      //     updatedAt: new Date(file.updatedAt).getTime().toString(),
      //   },
      // }),
      title: file.customMetadata?.Title ?? file.name,
      description: file.customMetadata?.Description ?? file.name,
      duration: (file as any).duration ?? 0,
      createdAt: file.createdAt,
    }))
  );
}
