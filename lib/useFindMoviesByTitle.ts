import useSWR from "swr";

const fetcher = async (title: string) => {
  let titles = await fetch(title).then((r) => r.json());
  let ids = titles?.movie?.Search?.slice(0, 5)?.map((m) => m.imdbID);

  const f = (url: string) => {
    return fetch(url).then((r) => r.json());
  };

  const urls = ids.map((id) => `/api?id=${id}`);
  return Promise.all(urls.map((url) => f(url)));
};

/**
 * Hook that uses the title of a movie to search through OMDb.
 * Will only fetch if the title has a length bigger than one.
 *
 * @param title titles used to find movies
 * @returns
 */
export function useFindMoviesByTitle(title: string) {
  const url = `/api?title=${title}`;
  const shouldFetch = title.length > 2;
  const { data, error, isLoading } = useSWR(shouldFetch ? url : null, fetcher);

  return { data, error, isLoading };
}
