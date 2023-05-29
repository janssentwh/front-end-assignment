"use client";

import { useState, createContext, ReactNode } from "react";

import { useFindMoviesByTitle } from "@/lib/useFindMoviesByTitle";

type Props = {
  children?: ReactNode;
};

export const SearchContext = createContext({});

export const SearchContextProvider = ({ children }: Props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const {
    data: searchResults,
    error,
    isLoading,
  } = useFindMoviesByTitle(searchTerm);

  const store = {
    searchTerm: { searchTerm, setSearchTerm },
    searchResults,
    error,
    isLoading,
  };

  return (
    <SearchContext.Provider value={store}>{children}</SearchContext.Provider>
  );
};
