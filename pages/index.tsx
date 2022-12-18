import Banner from "../components/banner";
import { Box, Heading } from "@chakra-ui/react";
import Image from "next/image";
import Testimonials from "../components/testimonials";
import Map from "../components/map";
import Footer from "../components/footer";

export default function Home() {
  return (
    <Box as="main">
      <Banner />

      <Testimonials />

      <Box my="5">
        <Heading size="lg" textAlign="center">
          Gallery
        </Heading>
      </Box>

      <Box mt="5">
        <Heading size="lg" textAlign="center" my="3">
          Contact Us
        </Heading>
        <Map />
      </Box>

      <Footer />
    </Box>
  );
}
