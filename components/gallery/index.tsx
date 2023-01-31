import { Box, SimpleGrid, Skeleton } from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";

const photos = [
  "/images/eyebrow-three.jpg",
  "/images/henna-one.jpg",
  "/images/facial-one.jpg",

  "/images/eyebrow-two.webp",
  "/images/facial-two.jpg",
  "/images/eyebrow-five.jpg",

  "/images/henna-two.jpg",
  "/images/eyebrow-four.jpg",
  "/images/henna-three.jpg",
];

interface PhotoThumbnailProps {
  imageSrc: string;
  altText: string;
}

function PhotoThumbnail({ imageSrc, altText }: PhotoThumbnailProps) {
  return (
    <Box
      cursor="pointer"
      boxShadow="md"
      bg="white"
      position="relative"
      minH="350px"
      borderRadius="md"
      transition="all 0.25s linear"
      _hover={{
        boxShadow: "xl",
        cursor: "pointer",
      }}
    >
      <Image
        src={imageSrc}
        alt={altText}
        fill
        style={{
          objectFit: "cover",
          borderRadius: "var(--chakra-radii-md)",
        }}
      />
    </Box>
  );
}

export default function Gallery() {
  return (
    <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={[5, null, 10]}>
      {photos.map((photo, index) => {
        const key = `${index}-${photo}`;
        return <PhotoThumbnail imageSrc={photo} altText={photo} key={key} />;
      })}
    </SimpleGrid>
  );
}
