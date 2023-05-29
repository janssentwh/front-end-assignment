"use client";

import { Link } from "@chakra-ui/next-js";
import { Stack } from "@chakra-ui/react";

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
    <Stack spacing={4} direction="row" align="center">
      {navItems.map(({ title, href }) => {
        return (
          <Link href={href} key={title + href}>
            {title}
          </Link>
        );
      })}
    </Stack>
  );
}
