import crypto from "crypto";
import type { NextApiRequest, NextApiResponse } from "next";

const privateKey = process.env.IMAGEKIT_PRIVATE_KEY!;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  /**
   * TODO:
   * Implement auth here,
   * token is randomUUID from crypto package,
   * expire is 2400 seconds i.e. 40 minutes from now,
   * privateAPIKey is privateKey
   * signature is sha1 using privateAPIKey + token + expire
   * createHmac("sha1", privateAPIKey).update(token + expire).digest("hex")
   * 
   * send token, expire, signature in response object
   */
}
