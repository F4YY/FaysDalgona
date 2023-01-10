import React from 'react';
import FD_AboutUs from "./images/FD_AboutUs.jpg";
import { Text, Heading, Box, HStack, VStack, Image } from "@chakra-ui/react";

const About = () => {
  return (
    <Box
      backgroundColor="rgb(51,51,51)"
    >
        <VStack
            pt={5} pb={5}
            justifyContent="center"
        >
            <Heading as="h1" id="About-section" fontSize={{base: "25px", md: "30px", lg:"36px"}} color="white">
                About Us
            </Heading>
            <HStack
                display="flex"
                mt={{ base: "4rem", md: '4rem', lg: '1rem'}}
                mb={{ base: "1rem", md: '2rem', lg: '2rem'}}
                ml={{ base: "auto",sm: "1rem", md: "auto", lg: "auto"}}
                mr={{ base: "auto",sm: "1rem", md: "auto", lg: "auto"}}
                flexDirection={{base:"column", md:"row", lg:"row"}}
                justifyContent="center"
                padding={10}
                spacing={15}
                gap={6}
            >
                <Image
                    display="flex"
                    height={{base: 300, md: 360, lg:440}}
                    w="auto"
                    borderRadius={20}
                    src={FD_AboutUs}
                    alt="About"
                />
                <VStack alignItems="left">
                    <Heading fontFamily="Montez" color="rgb(244,206,20)" size={{base: "md", md: "lg", lg:"lg"}}>Fay's Dalgona</Heading>
                    <Heading fontFamily="Markazi Text" color="white" size={{base: "sm", md: "md", lg:"md"}}>Indonesia</Heading>
                    <Text pt={4} w={{base:"auto", md:"auto", lg:"400px"}} color="white" textAlign="justify">
                    Outlet-outlet Fay’s Dalgona yang berikutnya kami sebut “Volume 01, 02, 03, dst”, pertama kali beroperasi dengan nama
                    Fay Thai Tea pada awal 2020 yang  berlokasi di Caringin, Bogor. Menginjak Maret 2020 badai Corona menerjang, Namun
                    sampai saat ini Fay Thai Tea tetap bertahan di tengah situasi pandemic dan resmi telah  mencatatkan balik modal pada
                    Agustus 2020. Kini kami akan mengembangkan usaha kami dengan membuka cabang baru di Kota Bogor Selatan, tepatnya
                     di depan perumahan Rancamaya, Bogor.

                    </Text>
                </VStack>
            </HStack>
        </VStack>
    </Box>
  );
};

export default About;
