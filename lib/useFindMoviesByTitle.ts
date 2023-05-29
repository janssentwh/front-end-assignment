import useSWR from "swr";
import useDebounce from "./useDebounce";
import { MovieType } from "@/app/MoviePropsType";

/**
 * We search for a title first, after which we use the result of that
 * to search for multiple IMDb ID's
 *
 * @param title
 * @returns
 */
const fetcher = async (title: string) => {
  let titles = await fetch(title).then((r) => r.json());
  let ids = titles?.movie?.Search?.slice(0, 5)?.map((m: MovieType) => m.imdbID);

  const f = (url: string) => {
    return fetch(url).then((r) => r.json());
  };

  const urls = ids.map((id: string) => `/api?id=${id}`);
  return Promise.all(urls.map((url: string) => f(url)));
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
  const debouncedUrl = useDebounce(url, 400);

  const { data, error, isLoading } = useSWR(
    debouncedUrl ? (shouldFetch ? debouncedUrl : null) : null,
    fetcher
  );

  return { data, error, isLoading: isLoading && debouncedUrl };
}
