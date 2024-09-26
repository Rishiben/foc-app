import React from "react";
import { ChakraProvider, Text,Box} from "@chakra-ui/react";

function Contact() {

  return (
    <ChakraProvider>
      <Box justifyContent="center" textAlign="center" >
      <Text mt={2}  borderRadius={5} as='b' color='black' fontSize='xl'>Call to order :9685729166,9575091017</Text>
      </Box>
      <Box justifyContent="center" textAlign="center" >
      <Text mt={2}  borderRadius={5} as='b' color='black' fontSize='sm'>*Available from 5PM to 10PM</Text>
      </Box>
    </ChakraProvider>
  );
}

export default Contact;