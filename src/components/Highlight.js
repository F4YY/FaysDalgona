import React from 'react';
import FD_DalgChocSilv from "./images/FD_DalgChocSilv.png";
import FD_Croffle from "./images/FD_Croffle.jpg";
import FD_SateBaksoSeafood from "./images/FD_SateBaksoSeafood.jpg";
import { Heading, Box, Button, Image, VStack, HStack } from "@chakra-ui/react";
import TopMenu from './TopMenu';

const Highlight = () => {
    const handleClick = (anchor) => () => {
        const id = `${anchor}-section`;
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      };

    const scrollRef = React.useRef(null);

    return(
        <Box>
            <HStack
                display="flex"
                justifyContent="space-between"
                ml={{ base: "1rem",sm: "1rem", md: "7rem", lg: "10rem" }}
                mr={{ base: "1rem",sm: "1rem", md: "7rem", lg: "10rem" }}
                flexDirection={{base:"column", md:"row", lg:"row"}}
                p={4}
            >
                <Heading as="h1" id="Menu-section" fontSize={{base: "25px", md: "30px", lg:"36px"}} color="rgb(51,51,51)">
                    This Weeks Specials!
                </Heading>
                <a href="#Menu" onClick={handleClick("Menu")}>
                    <Button zIndex={0} fontSize={{base: "16px", md: "19px", lg:"22px"}}
                    color="#333333" fontWeight="bold"
                    backgroundColor="rgb(244,206,20)"
                    w={200}
                    borderRadius={10}
                    id="Order Online">Order Online</Button>
                </a>
            </HStack>
            <HStack
                mt={{ base: "auto", md: '1rem', lg: '2rem'}}
                mb={{ base: "auto", md: '1rem', lg: '2rem'}}
                ml={{ base: "auto",sm: "1rem", md: "4rem", lg: "10rem" }}
                mr={{ base: "auto",sm: "1rem", md: "4rem", lg: "10rem" }}
                flexDirection={{base:"column", sm: "column",md:"row", lg:"row"}}
                justifyContent="flex-start"
                spacing={{base:'auto', md:"auto", lg:2}}
                gap={7}
                display="flex"
                flex={1}
                cursor="pointer"
                position="relative"
                overflowX="scroll"
                ref={scrollRef}
                zIndex={0}
            >
                <VStack
                    backgroundColor="rgb(217,217,217)"
                    borderRadius={20}
                    display="flex"
                    alignItems="center"
                    _hover={{opacity:"80%"}}
                    width={{base:"280px",md:"280px", lg:"auto"}}
                >
                    <Image
                        display="flex"
                        width={{base: "280px", md: "280px", lg:"320px"}}
                        borderRadius={30}
                        src={FD_DalgChocSilv}
                        alt="Greek Salad"
                    />
                    <TopMenu
                        title="Dalgona Choco Silverqueen"
                        subtitle="Order a delivery"
                        desc='The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'
                        price="$1.99"
                    />
                </VStack>
                <VStack
                    backgroundColor="rgb(217,217,217)"
                    borderRadius={20}
                    display="flex"
                    alignItems="center"
                    _hover={{opacity:"80%"}}
                    width={{base:"280px",md:"280px", lg:"auto"}}
                >
                    <Image
                        width={{base: "280px", md: "280px", lg:"320px"}}
                        height={{base: "280px", md: "340px", lg:"410px"}}
                        borderRadius={30}
                        src={FD_Croffle}
                        alt="bruschetta"
                        />
                    <TopMenu
                        title='Croffle'
                        subtitle="Order a delivery"
                        desc='Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Topped with choptomatoes,bazil.'
                        price="$0.69"
                    />
                </VStack>
                <VStack
                    backgroundColor="rgb(217,217,217)"
                    borderRadius={20}
                    display="flex"
                    alignItems="center"
                    _hover={{opacity:"80%"}}
                >
                    <Image
                        width={{base: "280px", md: "280px", lg:"320px"}}
                        height={{base: "auto", md: "320px", lg:"390px"}}
                        borderRadius={30}
                        src={FD_SateBaksoSeafood}
                        alt="pasta"
                        />
                    <TopMenu
                        title='Sate Bakso Seafood'
                        subtitle="Order a delivery"
                        desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet nec in ornare and Lorem ipsumconsectetur adipiscing elit. Aliquet nec in ornare.'
                        price="$0.49"
                    />
                </VStack>
            </HStack>
        </Box>
    )
}

export default Highlight;