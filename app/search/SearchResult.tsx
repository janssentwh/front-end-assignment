import { MoviePropsType } from "../MoviePropsType";

import { Image } from "@chakra-ui/next-js";

import { Box, Badge, Flex } from "@chakra-ui/react";

export const SearchResult = ({
  Poster,
  Title,
  Type,
  Year,
  Rated,
  Genre,
  Director,
  Actors,
  Released,
  Plot,
  Awards,
}: MoviePropsType) => {
  return (
    <Flex
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      flexDir={{ base: "column", md: "row" }}
    >
      {Poster.includes("http") ? (
        <Image
          src={Poster}
          alt={`Poster for: ${Title}`}
          width="200"
          height="300"
          style={{
            objectFit: "cover",
          }}
        />
      ) : (
        <></>
      )}

      <Flex p="6" flexDir={"column"} gap={2}>
        <Box fontWeight="semibold" as="h3" lineHeight="tight" noOfLines={1}>
          {Title} ({Released})
        </Box>
        <Box fontSize="xs">
          Director:{" "}
          <Box as="span" color="gray.600">
            {Director}
          </Box>
        </Box>
        <Box fontSize="xs" mb={2}>
          Casting:{" "}
          <Box as="span" color="gray.600">
            {Actors}
          </Box>
        </Box>
        <Box display="flex" alignItems="baseline" gap={4} mb={2}>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
          >
            {Year}
          </Box>
          <Flex flexDir={"row"} gap={2} flexWrap={"wrap"}>
            {Genre?.split(", ").map((genre) => (
              <Badge borderRadius="full" px="2" colorScheme="blue">
                {genre}
              </Badge>
            ))}
          </Flex>
        </Box>

        <Box maxW="60ch" mb={2}>
          {Plot}
        </Box>

        <Flex flexDir={"row"} gap={2} flexWrap={"wrap"}>
          <Box fontSize="xs" alignSelf={""}>
            Awards:{" "}
            <Box as="span" color="gray.600">
              {Awards}
            </Box>
          </Box>
          <Box fontSize="xs" alignSelf={""}>
            Type:{" "}
            <Box as="span" color="gray.600">
              {Type}
            </Box>
          </Box>
          <Box fontSize="xs" alignSelf={""}>
            Rated:{" "}
            <Box as="span" color="gray.600">
              {Rated}
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};
