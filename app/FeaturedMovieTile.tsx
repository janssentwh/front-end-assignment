import { Image } from "@chakra-ui/next-js";

import { Box, Badge, Flex } from "@chakra-ui/react";

import { MovieTileProps } from "./MovieTilePropsType";

export default function FeaturedMovieTile({
  Title,
  Year,
  Awards,
  Poster,
  Plot,
}: MovieTileProps) {
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

      <Flex p="6" flexDir={"column"} gap={4}>
        <Box fontWeight="semibold" as="h3" lineHeight="tight" noOfLines={1}>
          {Title}
        </Box>
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="yellow">
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

        <Box maxW="40ch">{Plot}</Box>

        <Box fontSize="xs" alignSelf={""}>
          Awards:{" "}
          <Box as="span" color="gray.600">
            {Awards}
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
}
