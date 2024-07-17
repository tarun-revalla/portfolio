import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const file = searchParams.get("file");
  const filePath = path.join(process.cwd(), "public", "files", file);

  if (fs.existsSync(filePath)) {
    const fileBuffer = await fs.promises.readFile(filePath);
    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Disposition": `attachment; filename=${file}`,
        "Content-Type": "application/octet-stream",
      },
    });
  } else {
    return NextResponse.json({ error: "File not found" }, { status: 404 });
  }
}
