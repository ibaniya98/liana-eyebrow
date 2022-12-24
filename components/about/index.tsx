import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { ReactNode, createElement } from "react";
import { GiComb, GiPeaceDove } from "react-icons/gi";
import { VscSmiley } from "react-icons/vsc";
import { BsCurrencyDollar } from "react-icons/bs";

interface TileProps {
  title: string;
  icon: ReactNode;
  bgGradient: string;
}

function Tile({ title, bgGradient, icon }: TileProps) {
  return (
    <Box
      w="100%"
      maxW="200px"
      p="10"
      borderRadius="lg"
      boxShadow="lg"
      minH="100px"
      textAlign="center"
      textColor="white"
      bgGradient={bgGradient}
      mx="auto"
    >
      <Box fontSize="6xl" display="flex" justifyContent="center" mb="5">
        {icon}
      </Box>

      <Heading size="sm" letterSpacing="wide">
        {title}
      </Heading>
    </Box>
  );
}

export default function About() {
  return (
    <Box>
      <SimpleGrid columns={{ base: 1, sm: 2 }} gap="5">
        <Tile
          title="Honest Pricing"
          bgGradient="linear(40deg, #e87e16 0%, #f0de14 100%)"
          icon={<BsCurrencyDollar />}
        />
        <Tile
          title="Expert Stylists"
          bgGradient="linear(40deg, #5e2ced 0%, #a485fd 100%)"
          icon={<GiComb />}
        />

        <Tile
          title="Comfortable Atmosphere"
          bgGradient="linear(40deg, #2171d4 0%, #2cc4f0 100%)"
          icon={<GiPeaceDove />}
        />
        <Tile
          title="Satisfied Customers"
          bgGradient="linear(40deg, #e03827 0%, #f9a47a 100%)"
          icon={<VscSmiley />}
        />
      </SimpleGrid>
    </Box>
  );
}
