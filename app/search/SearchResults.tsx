import { useContext } from "react";
import { SearchContext } from "./SearchContext";
import { SearchResult } from "./SearchResult";
import { Flex } from "@chakra-ui/react";
import { MoviePropsType } from "../MoviePropsType";

export const SearchResults = () => {
  const { searchTerm, searchResults, isLoading, error } =
    useContext(SearchContext);

  if (isLoading) return <>Loading...</>;
  if (!searchResults && !isLoading && searchTerm.searchTerm.length)
    return (
      <>
        We could not find anything for "{searchTerm.searchTerm}", please try
        extending your search or different titles!
      </>
    );
  if (!searchResults && !searchTerm.searchTerm.length)
    return <>Type anything to get started searching movies!</>;
  if (error) return <>Whoops... something went wrong</>;

  return (
    <Flex flexDir="column" gap={4} pb={4}>
      {searchResults?.map(
        ({ movie }: { movie: MoviePropsType }, key: number) => {
          return <SearchResult {...movie} key={key} />;
        }
      )}
    </Flex>
  );
};
