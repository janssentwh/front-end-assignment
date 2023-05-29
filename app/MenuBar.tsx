"use client";

import { Stack, Container } from "@chakra-ui/react";
import Navigation from "./Navigation";

export default function MenuBar() {
  return (
    <Container maxW="1080px" p={4} mb={4}>
      <Stack spacing={4} direction="row" align="center">
        <Navigation />
      </Stack>
    </Container>
  );
}
