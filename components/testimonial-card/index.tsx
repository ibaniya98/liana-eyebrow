import { Box, Heading, Text } from "@chakra-ui/react";
import { Review } from "../../data/reviews";
import { StarIcon } from "@chakra-ui/icons";

interface RatingsProps {
  count: number;
}

function Ratings({ count }: RatingsProps) {
  const stars = [];
  for (let i = 0; i < count; i++) {
    stars.push(<StarIcon mr="1" color="orange" key={i} />);
  }
  return <Box my="2">{stars}</Box>;
}

export default function TestimonialCard({ reviewer, ratings, text }: Review) {
  return (
    <Box
      p="5"
      borderRadius="md"
      backgroundColor="gray.50"
      transition="all 0.25s linear"
      _hover={{
        backgroundColor: "white",
        boxShadow: "xl",
        cursor: "pointer",
      }}
    >
      <Ratings count={ratings} />
      <Text mt="3">&quot;{text}&quot;</Text>
      <Heading size="sm" textAlign="right">
        - {reviewer}
      </Heading>
    </Box>
  );
}
