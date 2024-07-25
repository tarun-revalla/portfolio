
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export default async function handler(req, res) {
  const { searchParams } = new URL(req.url, `http://${req.headers.host}`);
  const file = searchParams.get("file");

  if (!file) {
    return res.status(400).json({ error: "File parameter is missing" });
  }

  const filePath = path.join(process.cwd(), "public", "files", file);

  if (fs.existsSync(filePath)) {
    const fileBuffer = await fs.promises.readFile(filePath);
    res.setHeader("Content-Disposition", `attachment; filename=${file}`);
    res.setHeader("Content-Type", "application/octet-stream");
    return res.status(200).send(fileBuffer);
  } else {
    return res.status(404).json({ error: "File not found" });
  }
}
