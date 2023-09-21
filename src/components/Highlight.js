import React from 'react';
import FD_DalgChocSilv from "./images/FD_DalgChocSilv.png";
import FD_Croffle from "./images/FD_Croffle.jpg";
import FD_SateBaksoSeafood from "./images/FD_SateBaksoSeafood.jpg";
import { Heading, Box, Button, Image, VStack, HStack } from "@chakra-ui/react";
import TopMenu from './TopMenu';

const Highlight = () => {
    const scrollRef = React.useRef(null);
    return(
        <Box
         bgGradient={'linear(to-br, orange.500, orange.700, orange.500)'}
         minH={'100vh'}
        >
            <HStack
                display="flex"
                justifyContent="space-between"
                ml={{ base: "1rem",sm: "1rem", md: "7rem", lg: "10rem" }}
                mr={{ base: "1rem",sm: "1rem", md: "7rem", lg: "10rem" }}
                flexDirection={{base:"column", md:"row", lg:"row"}}
                p={4}
            >
                <Heading as="h1" id="Menu-section" 
                    fontSize={{base: "25px", md: "30px", lg:"36px"}} color="blue.100"
                    mb={5}
                >
                    This Weeks Specials!
                </Heading>
                <a href="https://gofood.link/a/yHFDprE" target="_blank" rel="noreferrer">
                    <Button zIndex={0} fontSize={{base: "16px", md: "19px", lg:"22px"}}
                        variant='outline'
                        outline="1px solid yellow"
                        color="yellow"
                        fontWeight="bold"
                        w={200}
                        borderRadius={10}
                        _hover={{color:"azure", border:"2px solid azure"}}
                        id="Order Online"
                        mb={5}
                    >
                        Order Online
                    </Button>
                </a>
            </HStack>
            <HStack
                mt={{ base: "auto", md: '1rem', lg: '2rem'}}
                mb={{ base: "auto", md: '1rem', lg: '2rem'}}
                ml={{ base: "auto",sm: "1rem", md: "4rem", lg: "10rem" }}
                mr={{ base: "auto",sm: "1rem", md: "4rem", lg: "10rem" }}
                flexDirection={{base:"column", sm: "column",md:"row", lg:"row"}}
                justifyContent="flex-start"
                spacing={{base:'2', md:"2", lg:2}}
                gap={7}
                display="flex"
                flex={1}
                cursor="pointer"
                position="relative"
                overflowX="scroll"
                ref={scrollRef}
                zIndex={0}
                pb={5}
            >
                <VStack
                    backgroundColor="orange.100"
                    borderRadius={20}
                    display="flex"
                    alignItems="center"
                    _hover={{opacity:"80%"}}
                    width={{base:"auto",md:"auto", lg:"auto"}}
                    m='0 1rem'
                >
                    <Image
                        display="flex"
                        width={{base: "auto", md: "auto", lg:"auto"}}
                        borderRadius={30}
                        src={FD_DalgChocSilv}
                        alt="DalgChocSilv"
                    />
                    <TopMenu
                        title="Dalgona Choco Silverqueen"
                        subtitle="Order a delivery"
                        desc='Minuman Dalgona rasa cokelat silverqueen iced susu full cream dipadu dengan brown sugar dan boba.'
                        price="Rp16.000/cup"
                    />
                </VStack>
                <VStack
                    backgroundColor="orange.100"
                    borderRadius={20}
                    display="flex"
                    alignItems="center"
                    _hover={{opacity:"80%"}}
                    width={{base:"auto",md:"auto", lg:"auto"}}
                >
                    <Image
                        display="flex"
                        width={{base: "340px", md: "auto", lg:"auto"}}
                        height={{base: "auto", md: "370px", lg:"390px"}}
                        borderRadius={30}
                        src={FD_Croffle}
                        alt="Croffle"
                        />
                    <TopMenu
                        title='Croffle Original'
                        subtitle="Order a delivery"
                        desc='Croissant waffle baked dengan butter margarine, taburan gula aren dan gula pasir.'
                        price="Rp8000/pcs"
                    />
                </VStack>
                <VStack
                    backgroundColor="orange.100"
                    borderRadius={20}
                    display="flex"
                    alignItems="center"
                    _hover={{opacity:"80%"}}
                >
                    <Image
                        width={{base: "340px", md: "auto", lg:"auto"}}
                        height={{base: "auto", md: "320px", lg:"370px"}}
                        borderRadius={30}
                        src={FD_SateBaksoSeafood}
                        alt="SateBaksoSeafood"
                        />
                    <TopMenu
                        title='Sate Bakso Seafood'
                        subtitle="Order a delivery"
                        desc='Sate dari berbagai macam olahan bakso seafood baked dan ditaburi dengan saos barbeque, mayonaise, keju dan sambal.'
                        price="Rp3000/tusuk"
                    />
                </VStack>
            </HStack>
        </Box>
    )
}

export default Highlight;