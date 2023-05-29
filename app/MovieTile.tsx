import { Image } from "@chakra-ui/next-js";

import { Box, Badge, Flex } from "@chakra-ui/react";

import { MovieTileProps } from "./MovieTileProps";

export default function MovieTile({
  Title,
  Year,
  Awards,
  Released,
  Poster,
  Plot,
}: MovieTileProps) {
  return (
    <Flex
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      flexDir={["column", "row"]}
    >
      <Image
        src={Poster}
        alt={Plot}
        width="200"
        height="300"
        style={{
          objectFit: "cover",
        }}
      />

      <Flex p="6" flexDir={"column"} gap={4}>
        <Box fontWeight="semibold" as="h3" lineHeight="tight" noOfLines={1}>
          {Title}
        </Box>
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            Featured
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {Year}
          </Box>
        </Box>

        <Box maxW="60ch">{Plot}</Box>

        <Box fontSize="xs" alignSelf={"bottom"}>
          Awards:{" "}
          <Box as="span" color="gray.600">
            {Awards}
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
}
