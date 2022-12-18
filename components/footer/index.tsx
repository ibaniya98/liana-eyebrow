import { Box, Divider, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import BusinessHours from "../business-hour";

export default function Footer() {
  return (
    <Box backgroundColor="gray.100" w="100%" p={[5, null, 10]}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing="5">
        <Box>
          {/* Logo */}

          <Box display="flex">
            <Text fontWeight="bold">Address: </Text>
            <Text
              ml="1"
              as="a"
              href="https://goo.gl/maps/vvp9yj7U8fvdafze9"
              target="_blank"
            >
              <Text>15 E Montgomery Cross Rd Suit A</Text>
              <Text>Savannah, GA 31406</Text>
            </Text>
          </Box>

          {/* <Box display="flex">
            <Text fontWeight="bold">Email:</Text>
            <Text ml="1" as="a" href="mailto:">
              15 E Montgomery Cross Rd Suit A, Savannah, GA 31406
            </Text>
          </Box> */}

          <Box display="flex">
            <Text fontWeight="bold">Phone:</Text>
            <Text as="a" href="tel:19122394596" ml="1">
              +1 (912) 239-4596
            </Text>
          </Box>
        </Box>

        <Box>
          <Heading size="sm">Business Hours</Heading>
          <Divider maxW="250px" my="2" borderColor="gray.300" />
          <BusinessHours />
        </Box>
      </SimpleGrid>
    </Box>
  );
}
