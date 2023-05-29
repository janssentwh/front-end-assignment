import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

/**
 * Hook that uses the IMDb ID of a movie to search through OMDb
 * 
 * @param imdbId ID used to find movie
 * @returns 
 */
export function useFindMovieById(imdbId: string) {
  const url = `/api?id=${imdbId}`;
  const { data, error, isLoading } = useSWR(url, fetcher);

  return { data, error, isLoading };
}
