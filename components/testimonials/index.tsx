import { Box, Button, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import Link from "next/link";
import { Review, reviews } from "../../data/reviews";

function Testimonial({ reviewer, ratings, text }: Review) {
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
      <Text>{ratings}</Text>
      <Text>&quot;{text}&quot;</Text>
      <Text>- {reviewer}</Text>
    </Box>
  );
}

export default function Testimonials() {
  return (
    <Box>
      <Heading size="lg" textAlign="center" my="3">
        Testimonials
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing="5" p="5">
        {reviews.map((x) => {
          return (
            <Testimonial
              ratings={x.ratings}
              text={x.text}
              reviewer={x.reviewer}
              key={x.reviewer}
            />
          );
        })}
      </SimpleGrid>

      <Box my="5" textAlign="center">
        <Button colorScheme="blue">
          <Link href="https://search.google.com/local/reviews?placeid=ChIJI8VARZR1-4gRlA-qeTwOqgk">
            View More
          </Link>
        </Button>

        <Button ml="3">
          <Link href="https://search.google.com/local/writereview?placeid=ChIJI8VARZR1-4gRlA-qeTwOqgk">
            Write Review
          </Link>
        </Button>
      </Box>
    </Box>
  );
}
