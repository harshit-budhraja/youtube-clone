import type { NextApiRequest, NextApiResponse } from "next";
import ImageKit from "imagekit";

const publicKey = process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY!;
const privateKey = process.env.IMAGEKIT_PRIVATE_KEY!;
const urlEndpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  /**
   * TODO:
   * Implement auth here,
   * Create a new imagekit instance by passing publicKey, privateKey, urlEndpoint
   * Get the token, expire, signature from the imagekit instance
   * using the getAuthenticationParameters method
   * 
   * send token, expire, signature in response object
   */
  // const imagekit = new ImageKit({
  //   publicKey,
  //   privateKey,
  //   urlEndpoint,
  // });

  // const { token, expire, signature } = imagekit.getAuthenticationParameters();

  // return res.status(200).json({ token, expire, signature });
}
