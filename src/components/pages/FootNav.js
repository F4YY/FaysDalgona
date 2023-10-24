import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Box, Heading, HStack, VStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: info@littlelemon.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/F4YY",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/rikiwendri/",
  },
  {
    icon: faInstagram,
    url: "https://www.instagram.com/fays.dalgona",
  },
  {
    icon: faTwitter,
    url: "https://www.twitter.com",
  },
];

const FootNav = () => {
  return (
      <Box color="lightgrey" maxWidth="auto" padding="1rem 4rem"
            translateY={0}
            transitionProperty="transform"
            transitionDuration=".3s"
            transitionTimingFunction="ease-in-out"
            backgroundColor="#18181b"
      >
          <footer>
            <HStack
              justifyContent="space-between"
              display="flex"
              flexDirection={{base:"column", sm: "column",md:"row", lg:"row"}}
              flexWrap={{base:"wrap", sm: "column",md:"row", lg:"auto"}}
              gap={8}
            >
              <VStack spacing={2} display="flex">
                <p>Visit our social media</p>
                <HStack display="flex">
                  {socials.map(({icon, url}) => (
                    <a
                        key={url}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={icon} size="2x" key={url} />
                    </a>
                  ))}
                </HStack>
              </VStack>
              <VStack spacing={1} alignItems="left">
                <Heading as="h1" fontSize={{base: "16px", md: "20px", lg:"22px"}} display={{base:"none",md:"flex",lg:"flex"}} color="azure">
                    Contact :
                </Heading>
                <p>Address : Caringin, Bogor, West Java - Indonesia -</p>
                <p>Phone Number : 0857-73436024</p>
                <p>e-mail : info@faysdalgona.com</p>
              </VStack>
              <VStack spacing={1} alignItems="left">
                <Heading as="h2" fontSize={{base: "16px", md: "20px", lg:"22px"}} color="azure">
                    Open hours :
                </Heading>
                <p>Monday-Sunday : 10:00 - 20:00</p>
                <p>Eid Fitri : Close</p>
              </VStack>
              <HStack spacing={1}>
                <img src={require("../images/FooterFD.png")} alt="LL_Footer" width="25%"/>
                <p>© 2023</p>
              </HStack>
            </HStack>
          </footer>
      </Box>
  );
};
export default FootNav;
