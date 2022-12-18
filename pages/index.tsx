import Banner from "../components/banner";
import { Box, Container, Heading } from "@chakra-ui/react";
import Image from "next/image";
import Testimonials from "../components/testimonials";
import Map from "../components/map";
import Footer from "../components/footer";
import Gallery from "../components/gallery";

export default function Home() {
  return (
    <Box as="main">
      <Banner />

      <Testimonials />

      <Box my="10">
        <Heading size="lg" textAlign="center" my="5">
          Gallery
        </Heading>

        <Container maxW="container.xl">
          <Gallery />
        </Container>
      </Box>

      <Box mt="10">
        <Heading size="lg" textAlign="center" my="5">
          Contact Us
        </Heading>
        <Map />
      </Box>

      <Footer />
    </Box>
  );
}
