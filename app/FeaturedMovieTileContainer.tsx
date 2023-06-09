import { useFindMoviesByIds } from "@/lib/useFindMoviesByIds";
import MovieTile from "./FeaturedMovieTile";
import { Flex, Box, Heading, Spinner } from "@chakra-ui/react";
import { MovieTileProps } from "./MovieTilePropsType";

export default function FeaturedMovieTileContainer() {
  const { data, error, isLoading } = useFindMoviesByIds([
    "tt1160419",
    "tt1856101",
  ]);

  if (isLoading) return <Spinner size="xl" />;
  if (error || !data) return <>error</>;

  return (
    <Box pb={4}>
      <Heading as="h2" mb={4}>
        Featured movies
      </Heading>
      <Flex flexDir={{ base: "column", lg: "row" }} gap={"4"}>
        {data.map(({ movie }: { movie: MovieTileProps }) => {
          return <MovieTile {...movie} key={movie.imdbID} />;
        })}
      </Flex>
    </Box>
  );
}
