import { NextResponse } from "next/server.js";
const API = "https://emoji-server.onrender.com";

export function GET() {
  return NextResponse.json({
    success: true,
    message: "Welcome to the emoji server",
  });
}


