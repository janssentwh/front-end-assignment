"use client";

import { Container, Heading, Stack } from "@chakra-ui/react";
import { SearchBar } from "./SearchBar";
import { SearchContextProvider } from "./SearchContext";
import { SearchResults } from "./SearchResults";

export default function search() {
  return (
    <main>
      <SearchContextProvider>
        <Container maxW="1280px">
          <Stack gap={4}>
            <SearchBar />
            <Heading as="h2">Search results</Heading>
            <SearchResults />
          </Stack>
        </Container>
      </SearchContextProvider>
    </main>
  );
}
