import React from 'react';
import FD_homepage from "../images/FD_homepage.jpg";
import { Box, HStack, Image } from "@chakra-ui/react";
import Features from './Features';

const HeroSection = () => (
  <Box
    bgGradient={'linear(to-tl, orange.700, orange.500, orange.900)'}
    minH='100vh'
    zIndex={-1}
  >
    <HStack
      id="Home-section"
      display="flex"
      mt={{ base: "4rem", md: '4rem', lg: '1rem'}}
      mb={0}
      ml={{ base: ".5rem",sm: "1rem", md: "4rem", lg: "8rem" }}
      mr={{ base: "1rem",sm: "1rem", md: "7rem", lg: "15rem" }}
      sizes={{base: '100%',md: '80%',xl: '50%'}}
      gap={5}
      pt={{base:2,md:5,lg:20}}
      pb={{base:5,md:10,lg:20}}
      flexDirection={{base:"column", md:"row", lg:"row"}}
      justifyContent="space-between"
    >
      <Features
        title="Fay's Dalgona"
        subtitle="Indonesia"
        desc="Fay's Dalgona offers you happiness and glory by serving tasty authentic Dalgona drinks. Explore our selection of 10 different flavors of Dalgona that can sweeten your every day. Try them all and experience the complete feeling of happiness. 
        Additionally, we also serve delicious food options such as Mie Nyemek, Croffle Original, and Sate Bakso Seafood, perfect to accompany your Dalgona experience"
        button="Reserve a table"
      />
      <Image
        display="flex"
        position={{base:"auto", md:"auto",lg:"absolute"}}
        top="130px"
        left="750px"
        height={{base: 350, md: "auto", lg:440}}
        w={400}
        borderRadius={20}
        src={FD_homepage}
        alt="homepage"
      />
    </HStack>
  </Box>
);

export default HeroSection;