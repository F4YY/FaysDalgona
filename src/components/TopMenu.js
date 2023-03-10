import { Heading, VStack, Text, HStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const TopMenu = ({ title, price, subtitle, desc }) => {
    return (
    <VStack
       color="rgb(51,51,51)"
       backgroundColor="orange.100"
       cursor="pointer"
       width={{base: "280px", md: "280px", lg:"320px"}}
    >
       <VStack spacing={5} p={4}
       >
         <HStack
            justifyContent="space-between"
            flexDirection="row"
            spacing={10}
         >
           <Heading as="h3" size={{base: "sm", md: "md", lg:"md"}}>
             {title}
           </Heading>
           <Heading as="h4" size={{base: "sm", md: "md", lg:"md"}} color="rgb(238,153,114)">
             {price}
           </Heading>
         </HStack>
         <Text color="#64748b" size={{base: "sm", md: "md", lg:"lg"}}>
           {desc}
         </Text>
         <HStack spacing={7}>
          <Heading
            fontFamily="Karla"
            fontSize="lg"
            color="#333333">{subtitle}
          </Heading>
           <FontAwesomeIcon icon={faCar} size="1x" />
         </HStack>
       </VStack>
     </VStack>
  )
}

export default TopMenu;