import { Box, Button, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import Link from "next/link";
import { Review, reviews } from "../../data/reviews";

function Testimonial({ reviewer, ratings, text }: Review) {
  return (
    <Box boxShadow="lg" p="5" borderRadius="md">
      <Text>{ratings}</Text>
      <Text>&quot;{text}&quot;</Text>
      <Text>- {reviewer}</Text>
    </Box>
  );
}

export default function Testimonials() {
  return (
    <Box>
      <Heading size="md">Testimonials</Heading>
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

      <Link href="https://search.google.com/local/reviews?placeid=ChIJI8VARZR1-4gRlA-qeTwOqgk">
        <Button colorScheme="blue">View More</Button>
      </Link>

      <Link href="https://search.google.com/local/writereview?placeid=ChIJI8VARZR1-4gRlA-qeTwOqgk">
        <Button>Write Review</Button>
      </Link>
    </Box>
  );
}
