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
  const title = searchParams.get("title");
  const baseUrl = `${process.env.OMDB_API_BASE_URL}?apiKey=${process.env.OMDB_API_KEY}`;
  const plotType = "full";

  let res = null;

  if (id?.length) {
    res = await fetch(`${baseUrl}&i=${id}&plot=${plotType}`);
  } else if (title?.length) {
    res = await fetch(`${baseUrl}&s=${title}&plot=${plotType}`);
  } else {
    return NextResponse.json({
      error: true,
      errorMessage: "Parameters id or title are required",
    });
  }

  const result = await res.json();

  return NextResponse.json({
    movie: { ...result },
  });
}
