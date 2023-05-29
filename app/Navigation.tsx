"use client";

import { Link } from "@chakra-ui/next-js";
import { Container, Stack } from "@chakra-ui/react";

const navItems = [
  {
    title: "home",
    href: "/",
  },
  {
    title: "search",
    href: "/search",
  },
];

export default function Navigation() {
  return (
    <Container>
      <Stack spacing={4} direction="row" align="center">
        {navItems.map(({ title, href }) => {
          return <Link href={href}>{title}</Link>;
        })}
      </Stack>
    </Container>
  );
}
