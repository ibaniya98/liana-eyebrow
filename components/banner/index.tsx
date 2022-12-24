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
    <Box p="5" m="5">
      <Grid gridTemplateColumns={{ base: "1fr", md: "3fr 2fr" }} gap="5">
        <Box display="flex" justifyContent="center" flexDir="column">
          <Heading size="xl">Liana Eyebrow Threading and Spa</Heading>

          <Divider my="5" maxW="600px" borderColor="gray.300" />

          <Box>
            <Text fontSize="xl">Elevate your style with perfect eyebrows</Text>
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
  );
}
