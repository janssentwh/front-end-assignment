"use client";

import { useContext } from "react";

import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";

import { SearchIcon } from "@chakra-ui/icons";
import { SearchContext } from "./SearchContext";

export const SearchBar = () => {
  const { searchTerm } = useContext(SearchContext);

  const handleChange = (e) => {
    if (e.target.value !== searchTerm.searchTerm) {
      searchTerm.setSearchTerm(e.target.value);
    }
  };

  return (
    <InputGroup borderRadius={5}>
      <InputLeftElement
        pointerEvents="none"
        children={<SearchIcon color="gray.600" />}
      />
      <Input
        type="text"
        placeholder="Search..."
        value={searchTerm.searchTerm}
        onChange={handleChange}
      />
    </InputGroup>
  );
};
