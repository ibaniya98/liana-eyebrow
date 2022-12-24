import Banner from "../components/banner";
import { Box, Container, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import Image from "next/image";
import Testimonials from "../components/testimonials";
import Map from "../components/map";
import Footer from "../components/footer";
import Gallery from "../components/gallery";
import Navbar from "../components/navbar";
import About from "../components/about";

export default function Home() {
  return (
    <Box as="main">
      <Navbar />
      <Banner />

      <Box
        py="10"
        px={[10, null, 20]}
        bgGradient="linear(0deg, #FAF5FF 0%, #FFFFFF 100%)"
      >
        <SimpleGrid
          my="5"
          columns={{ base: 1, md: 2 }}
          spacing={{ base: 10, md: 20 }}
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            fontSize="lg"
          >
            <Text>
              Say goodbye to bad brow days and hello to perfectly groomed
              eyebrows. Our salon offers a variety of brow services, including
              waxing, shaping, and more. From natural and understated to bold
              and statement-making, our skilled team will help you achieve your
              desired brow shape and style. Experience the transformation with
              our brow grooming and styling services.
            </Text>

            <Text mt="3">
              In addition to offering top-notch brow services, enjoy our
              welcoming and comfortable atmosphere. Our friendly and attentive
              stylists are skilled in a variety of techniques, including waxing,
              threading, and tinting, and they will work with you to create the
              perfect brow look for your unique features. You can always trust
              us for high-quality brow services in a friendly and welcoming
              environment, where cleanliness and hygiene are also a top
              priority.
            </Text>
          </Box>

          <About />
        </SimpleGrid>
      </Box>

      <Testimonials />

      <Box py="10" bgGradient="linear(0deg, #FFFFFF 0%, #FAF5FF 100%)">
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
