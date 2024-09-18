import React from 'react';
import { Grid, Box, Image, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import items from '../data'
// Sample Data for Grid Items

const ImageGrid = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    const route=`/menupage/${id}`;
    navigate(route);
  };

  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={6} >
      {items.map((item) => (
        <Box key={item.id} textAlign="center" cursor="pointer" backgroundColor="rgb(138, 199, 166)" margin={1} padding={3} borderRadius={10} onClick={() => handleClick(item.id)}>
          <Image src={item.imgSrc} alt={item.name} borderRadius="md" />
          <Text mt={2}  borderRadius={5} as='b'>{item.name}</Text>
        </Box>
      ))}
    </Grid>
  );
};

export default ImageGrid;