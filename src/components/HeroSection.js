import React from 'react';
import FD_homepage from "./images/FD_homepage.jpg";
import { Box, HStack, Image } from "@chakra-ui/react";
import Features from './Features';

const HeroSection = () => {
  return (
    <Box
      backgroundColor="orange.600"
      zIndex={-1}
    >
      <HStack
        id="Home-section"
        display="flex"
        mt={{ base: "4rem", md: '4rem', lg: '1rem'}}
        mb={{ base: "1rem", md: '2rem', lg: '2rem'}}
        ml={{ base: "1rem",sm: "1rem", md: "7rem", lg: "15rem" }}
        mr={{ base: "1rem",sm: "1rem", md: "7rem", lg: "15rem" }}
        sizes={{base: '100%',md: '80%',xl: '50%'}}
        gap={5}
        pt={{base:2,md:5,lg:20}}
        pb={5}
        flexDirection={{base:"column", md:"row", lg:"row"}}
        justifyContent="space-between"
      >
        <Features
          title="Fay's Dalgona"
          subtitle="Indonesia"
          desc="Fay's Dalgona offers you happiness and glorious by serving tasty authentic Dalgona drink.
                There are 10 different taste of Dalgona that can sweeten your every day.
                Try them all and have your happiness feels complete."
          button="Reserve a Table"
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
};

export default HeroSection;