import { Box, SimpleGrid, Skeleton } from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";

const photos = [
  "/images/eyebrow-one.jpg",
  "/images/eyebrow-one.jpg",
  "/images/eyebrow-one.jpg",
  "/images/eyebrow-one.jpg",
  "/images/eyebrow-one.jpg",
  "/images/eyebrow-one.jpg",
  "/images/eyebrow-one.jpg",
  "/images/eyebrow-one.jpg",
  "/images/eyebrow-one.jpg",
];

interface PhotoThumbnailProps {
  imageSrc: string;
  altText: string;
}

function PhotoThumbnail({ imageSrc, altText }: PhotoThumbnailProps) {
  return (
    <Box
      cursor="pointer"
      boxShadow="xl"
      bg="white"
      position="relative"
      minH="350px"
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
