import { Box, ChakraProps, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { ReactNode, createElement } from "react";
import { GiComb, GiPeaceDove } from "react-icons/gi";
import { VscSmiley } from "react-icons/vsc";
import { BsCurrencyDollar } from "react-icons/bs";

interface TileProps {
  title: string;
  icon: ReactNode;
  bgGradient: string;
  boxShadow?: string;
}

function Tile({ title, bgGradient, icon, boxShadow }: TileProps) {
  return (
    <Box
      w="100%"
      maxW="200px"
      p="10"
      borderRadius="lg"
      boxShadow={boxShadow || "md"}
      minH="100px"
      textAlign="center"
      textColor="white"
      bgGradient={bgGradient}
      mx="auto"
      transition="all 0.15s linear"
      _hover={{
        boxShadow: "xl",
        cursor: "pointer",
        transform: "scale(1.05)",
      }}
    >
      <Box fontSize="6xl" display="flex" justifyContent="center" mb="5">
        {icon}
      </Box>

      <Text fontSize="md" letterSpacing="wide">
        {title}
      </Text>
    </Box>
  );
}

export default function About() {
  return (
    <Box>
      <SimpleGrid columns={{ base: 1, sm: 2 }} gap="10">
        <Tile
          title="Honest Pricing"
          bgGradient="linear(40deg, #e87e16 0%, #f0de14 100%)"
          boxShadow="0px 20px 40px 0px rgb(224 149 32 / 40%)"
          icon={<BsCurrencyDollar />}
        />
        <Tile
          title="Expert Stylists"
          bgGradient="linear(40deg, #5e2ced 0%, #a485fd 100%)"
          boxShadow="0px 20px 40px 0px rgb(94 44 237 / 40%)"
          icon={<GiComb />}
        />

        <Tile
          title="Comfortable Atmosphere"
          bgGradient="linear(40deg, #2171d4 0%, #2cc4f0 100%)"
          boxShadow="0px 20px 40px 0px rgb(44 130 237 / 40%)"
          icon={<GiPeaceDove />}
        />
        <Tile
          title="Satisfied Customers"
          bgGradient="linear(40deg, #e03827 0%, #f9a47a 100%)"
          boxShadow="0px 20px 40px 0px rgb(224 56 39 / 40%)"
          icon={<VscSmiley />}
        />
      </SimpleGrid>
    </Box>
  );
}
