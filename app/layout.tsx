import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { Container } from "@chakra-ui/react";
import MenuBar from "./MenuBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Movie Database",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <MenuBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
