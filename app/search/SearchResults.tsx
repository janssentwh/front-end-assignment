import { useContext } from "react";
import { SearchContext } from "./SearchContext";
import { SearchResult } from "./SearchResult";
import { Flex } from "@chakra-ui/react";

export const SearchResults = () => {
  const { searchTerm, searchResults, isLoading, error } =
    useContext(SearchContext);

  if (isLoading) return <>Loading...</>;
  if (!searchResults && searchTerm?.searchTerm?.length > 2)
    return <>We could not find anything for "{searchTerm.searchTerm}"</>;
  if (error) return <>Whoops... something went wrong</>;

  return (
    <Flex flexDir="column" gap={4} pb={4}>
      {searchResults?.map(({ movie }, key) => {
        return <SearchResult {...movie} key={key} />;
      })}
    </Flex>
  );
};
