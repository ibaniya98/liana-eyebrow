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
        <Heading size="md">Gallery</Heading>
      </Box>

      <Box my="5">
        <Heading size="md">Contact Us</Heading>
        <Map />
      </Box>

      <Footer />
    </Box>
  );
}
