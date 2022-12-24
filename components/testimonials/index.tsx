import { Box, Button, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import Link from "next/link";
import TestimonialCard from "../testimonial-card";
import { reviews } from "../../data/reviews";

export default function Testimonials() {
  return (
    <Box my="10" py={{ base: 5, md: 10 }}>
      <Heading size="lg" textAlign="center" my="5">
        Testimonials
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing="5" p="5">
        {reviews.map((x) => {
          return (
            <TestimonialCard
              ratings={x.ratings}
              text={x.text}
              reviewer={x.reviewer}
              key={x.reviewer}
            />
          );
        })}
      </SimpleGrid>

      <Box my="5" textAlign="center">
        <Button variant="purple">
          <Link href="https://search.google.com/local/reviews?placeid=ChIJI8VARZR1-4gRlA-qeTwOqgk">
            View More
          </Link>
        </Button>

        <Button ml="3" variant="ghost">
          <Link href="https://search.google.com/local/writereview?placeid=ChIJI8VARZR1-4gRlA-qeTwOqgk">
            Write Review
          </Link>
        </Button>
      </Box>
    </Box>
  );
}
