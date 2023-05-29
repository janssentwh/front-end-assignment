import { NextResponse } from "next/server";

/**
 * API Route that makes sure our API KEY stays hidden but allows us to search for movies on the frontend.
 * 
 * @param request 
 * @returns 
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  const res = await fetch(
    `${process.env.OMDB_API_BASE_URL}?apiKey=${process.env.OMDB_API_KEY}&i=${id}&plot=full`
  );

  const result = await res.json();

  return NextResponse.json({
    movie: { ...result },
  });
}
