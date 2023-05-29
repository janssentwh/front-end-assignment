import useSWR from "swr";

const fetcher = (urls: string[]) => {
  const f = (url: string) => {
    return fetch(url).then((r) => r.json());
  };
  return Promise.all(urls.map((url) => f(url)));
};

/**
 * Hook that uses the IMDb ID of a movie to search through OMDb
 *
 * @param imdbIds IDs used to find movies
 * @returns
 */
export function useFindMoviesByIds(imdbIds: string[]) {
  const urls = imdbIds.map((id) => `/api?id=${id}`);
  const { data, error, isLoading } = useSWR(urls, fetcher);

  return { data, error, isLoading };
}
