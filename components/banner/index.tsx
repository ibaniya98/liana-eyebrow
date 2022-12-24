import { Box, Button, Divider, Grid, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { getStoreStatus } from "../../utils/time";
import { StoreHours } from "../../data/store";

function OpenTime() {
  const displayText = getStoreStatus(StoreHours, "America/New_York");
  return <Text>{displayText}</Text>;
}

export default function Banner() {
  return (
    <Box>
      <Box
        as="svg"
        minW="1440"
        w="100%"
        h="700"
        viewBox="0 0 1440 832"
        fill="blue"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        position="absolute"
        top="-40"
        left="0"
        zIndex="-1"
      >
        <path
          d="M1442 0H0V709.5C77.5 868.5 397.5 874.793 719.5 709.5C869.5 632.5 1247
      477.5 1442 654V0Z"
          fill="url(#header-swoosh)"
        ></path>
        <defs>
          <linearGradient
            id="header-swoosh"
            x1="-0.499977"
            y1="123"
            x2="1441.5"
            y2="189.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#d6d9ff"></stop>
            <stop offset="1" stop-color="#5226ba"></stop>
          </linearGradient>
        </defs>
      </Box>

      <Box p="5" mx="5" my="5" mb="10">
        <Grid
          gridTemplateColumns={{ base: "1fr", md: "3fr 2fr" }}
          gap="5"
          pt={{ base: 10, md: 20 }}
          pb={{ base: 10, md: 30 }}
        >
          <Box display="flex" justifyContent="center" flexDir="column">
            <Heading size="xl">Liana Eyebrow Threading and Spa</Heading>

            <Divider my="5" maxW="600px" borderColor="gray.300" />

            <Box>
              <Text fontSize="xl">
                Elevate your style with perfect eyebrows
              </Text>
              <OpenTime />
            </Box>

            <Button variant="purple" my="5" p="6" maxW="300px">
              <Link href="https://www.fresha.com/a/liana-eyebrow-threading-spa-savannah-15-east-montgomery-cross-road-xdqg1yep/">
                Book Now
              </Link>
            </Button>
          </Box>
          <Box w="100%" position="relative" display="inline-block" minH="300px">
            <Image
              src="/images/eyebrow-one.jpg"
              alt="Eyebrow threading"
              fill
              style={{
                objectFit: "cover",
                borderRadius: "var(--chakra-radii-md)",
              }}
            />
          </Box>
        </Grid>
      </Box>
    </Box>
  );
}
