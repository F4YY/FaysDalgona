import React from 'react';
import { Text, Heading, Box, HStack, VStack, Image } from "@chakra-ui/react";
import FD_AboutUs from "../images/FD_AboutUs.jpg";

const About = () => (
  <Box backgroundColor="rgb(51,51,51)">
    <VStack pt={5} pb={5} justifyContent="center">
      <Heading as="h1" id="About-section" fontSize={{base: "25px", md: "30px", lg:"36px"}} color="white">
        About Us
      </Heading>
      <HStack
        display="flex"
        mt={{ base: "4rem", md: '4rem', lg: '1rem'}}
        mb={{ base: "1rem", md: '2rem', lg: '2rem'}}
        ml="auto"
        mr="auto"
        flexDirection={{base:"column", md:"row", lg:"row"}}
        justifyContent="center"
        padding={5}
        spacing={15}
        gap={6}
      >
        <Image
          display="flex"
          height={{base: 'auto', md: 360, lg:440}}
          w="auto"
          borderRadius={20}
          src={FD_AboutUs}
          alt="About"
        />
        <VStack alignItems="left" style={{ marginInlineStart: 0 }}>
          <Heading fontFamily="Montez" color="rgb(244,206,20)" size={{base: "md", md: "lg", lg:"lg"}}>Fay's Dalgona</Heading>
          <Heading fontFamily="Markazi Text" color="white" size={{base: "sm", md: "md", lg:"md"}}>Indonesia</Heading>
          <Text pt={4} w={{base:"auto", md:"auto", lg:"400px"}} color="white" textAlign="justify">
            The following Fay's Dalgona outlets, which we will refer to as "Volume 01, 02, 03, etc.", first started operating under the name Fay Thai Tea in early 2020, located in Caringin, Bogor. In March 2020, the Corona storm hit, but until now Fay Thai Tea has managed to survive amidst the pandemic situation and officially achieved break-even in August 2020. Now, we will expand our business by opening a new branch in South Bogor City, precisely in front of the Rancamaya housing complex, Bogor.
          </Text>
        </VStack>
      </HStack>
    </VStack>
  </Box>
);

export default About;