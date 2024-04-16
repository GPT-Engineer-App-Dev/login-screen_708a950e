// Complete the Index page component here
// Use chakra-ui
import { Box, Button, Input, Stack, Text, Image, Center } from "@chakra-ui/react";
import { FaGoogle, FaApple } from "react-icons/fa";

const Index = () => {
  return (
    <Center height="100vh" bg="gray.50">
      <Box p={8} maxWidth="400px" borderWidth={1} borderRadius={8} boxShadow="lg" bg="white">
        <Stack spacing={4}>
          <Text fontSize="2xl" textAlign="center">
            Login
          </Text>
          <Input placeholder="Email address" size="lg" />
          <Button colorScheme="blue" size="lg">
            Login with Email
          </Button>
          <Button leftIcon={<FaGoogle />} colorScheme="red" variant="outline" size="lg">
            Login with Google
          </Button>
          <Button leftIcon={<FaApple />} colorScheme="gray" variant="outline" size="lg">
            Login with Apple
          </Button>
        </Stack>
      </Box>
    </Center>
  );
};

export default Index;
