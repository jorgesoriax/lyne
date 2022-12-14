import { Heading, Text, VStack } from "@chakra-ui/react";

export default function Header({ section, title }) {
  return (
    <VStack align="left" mb={12}>
      <Text color="gray.500">{section}</Text>
      <Heading as="h2" fontSize={{ base: 40, md: 45 }} fontWeight="extrabold">
        {title}
      </Heading>
    </VStack>
  );
}