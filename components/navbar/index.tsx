import { Box, Button } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <Box
      px="10"
      boxShadow="lg"
      backgroundColor="white"
      top="0"
      left="0"
      w="100%"
      zIndex={1}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box>
        <Image
          src="/logo/liana-eyebrows-logo.png"
          width="300"
          height="100"
          alt="Liana Eyebrow Threading and Spa Logo"
        />
      </Box>
      <Box display={{ base: "none", md: "block" }}>
        <Button variant="purple" px="8" maxW="300px">
          <Link href="https://www.fresha.com/a/liana-eyebrow-threading-spa-savannah-15-east-montgomery-cross-road-xdqg1yep/">
            Book Now
          </Link>
        </Button>
      </Box>
    </Box>
  );
}
