import { Box, Button, HStack, Image, Stack, VStack } from "@chakra-ui/react";
import Header from "./Header";
import gallery from "../content/gallery.json";
import { Cards, CirclesThreePlus } from "phosphor-react";

export default function Gallery() {
  const Card = ({ imageUrl, imageAlt }) => {
    return (
      <Box border="1px" borderColor="gray.200" borderRadius="2xl">
        <Image src={imageUrl} fit="cover" boxSize="300px" alt={imageAlt} />
      </Box>
    );
  };
  const Projects = () => {
    return (
      <Stack direction="row" gap={8} wrap="wrap" justify="center">
        {gallery.map(({ url, title }, index) => (
          <Card key={index} imageUrl={url} imageAlt={title} />
        ))}
      </Stack>
    );
  };
  const GalleryContainer = ({ children }) => {
    return (
      <VStack
        border="1px"
        borderColor="red"
        spacing={0}
        pb={{ base: 8, md: 12 }}
      >
        {children}
      </VStack>
    );
  };

  return (
    <GalleryContainer>
      <HStack w="full" justify="space-between">
        <Header section="Galería" title="Encuentra inspiración" />
        <Button
          colorScheme="brand"
          leftIcon={<CirclesThreePlus size={24} weight="fill" />}
        >
          Veamos el resto
        </Button>
      </HStack>
      <Projects />
    </GalleryContainer>
  );
}