"use client";
import { Container } from "@chakra-ui/react";
import FeaturedMovieTileContainer from "./FeaturedMovieTileContainer";

export default function Home() {
  return (
    <main>
      <Container maxWidth="1280px">
        <FeaturedMovieTileContainer />
      </Container>
    </main>
  );
}
