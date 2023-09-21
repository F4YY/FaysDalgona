import { Heading, Box, Text, Button, Image } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';

const Features = ({ title, subtitle, desc, button, image }) => {
  const navigate = useNavigate();
  const handleClick = (anchor) => () => {
    navigate(anchor)
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        });
        }
      };

    return (
        <Box
          p={3}
          shadow='lg'
          display="flex"
          flexDirection="column"
          size={{base: "sm", md: "md", lg:"md"}}
        >
        <Heading
          fontFamily='Montez, cursive'
          fontWeight='400'
          fontSize="8xl"
          color="ghostwhite"
          size={{base: "3xl", md: "4xl", lg:"7xl"}}
          letterSpacing={3}
        >
          {title}
        </Heading>
        <Heading
          fontFamily="calibri light, sans-serif"
          fontSize="5xl"
          color="goldenrod"
          size={{base: "lg", md: "xl", lg:"5xl"}}
          mt={{base: "10px", md: "12px", lg:"2px"}}
        >
          {subtitle}
        </Heading>
        <Text mt={8} mb={12} width={{base: "auto", md: "auto", lg:"50%"}}
          color="white"
        >
            {desc}
        </Text>
        <a href="#Reservation-section" onClick={handleClick("Reservation")}>
          <Button
            variant='outline'
            zIndex={0}
            color="yellow"
            outline="1px solid yellow"
            fontSize={{base: "16px", md: "19px", lg:"22px"}}
            fontFamily={"calibri light, sans-serif"}
            letterSpacing={1.2}
            borderRadius={10}
            _hover={{color:"azure", border:"2px solid azure"}}
          >
            {button}
          </Button>
        </a>
        <Image>{image}</Image>
        </Box>
  )
}

export default Features;