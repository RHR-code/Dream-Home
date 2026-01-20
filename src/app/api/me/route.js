import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const loggedIn = cookies().get("login");
  return NextResponse.json({ loggedIn: !!loggedIn });
}
