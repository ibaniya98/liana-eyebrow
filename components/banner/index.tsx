import { Box, Button, Divider, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

function OpenTime() {
  return <Text>Opening at 12:00 tomorrow</Text>;
}

export default function Banner() {
  return (
    <Box p="5" textAlign="center">
      <Heading size="xl">Liana Eyebrow Threading and Spa</Heading>
      <Divider my="3" />
      <Text>Eyebrow Bar in Savannah</Text>
      <OpenTime />

      <Button variant="purple" my="5" p="6">
        <Link href="https://www.fresha.com/a/liana-eyebrow-threading-spa-savannah-15-east-montgomery-cross-road-xdqg1yep/">
          Book Now
        </Link>
      </Button>
    </Box>
  );
}
