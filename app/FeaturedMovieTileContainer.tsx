import { useFindMovieById } from "@/lib/useFindMovieById";
import MovieTile from "./MovieTile";
import { Flex, Box, Heading } from "@chakra-ui/react";

export default function FeaturedMovieTileContainer() {
  const { data, error, isLoading } = useFindMovieById("tt1160419");

  if (isLoading) return <>Loading</>;
  if (error) return <>error</>;

  return (
    <Box>
      <Heading as="h2" mb={4}>
        Featured movies
      </Heading>
      <Flex flexDir={"row"} flexWrap={"wrap"} gap={"4"}>
        {[data.movie].map((movie) => {
          return <MovieTile {...movie} />;
        })}
        {[data.movie].map((movie) => {
          return <MovieTile {...movie} />;
        })}
      </Flex>
    </Box>
  );
}
