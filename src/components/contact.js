import React, { useEffect, useState } from "react";
import { ChakraProvider, Text, Heading, Image, VStack, Box, Center } from "@chakra-ui/react";

function Contact() {

  return (
    <ChakraProvider>
      <Box justifyContent="center" textAlign="center" >
      <Text mt={2}  borderRadius={5} as='b' color='black' fontSize='xl'>Call to order :9685729166,9575091017</Text>
      </Box>
    </ChakraProvider>
  );
}

export default Contact;