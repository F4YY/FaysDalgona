import React ,{ useContext, useEffect, useRef } from "react";
import FD_Header from "./images/FD_Header.png";
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineLogin, MdOutlineLogout, MdOutlineRestaurantMenu } from 'react-icons/md';
import { Button, Heading, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';
import AuthContext from "../context/authContext";
import {
  StyledHeading,
  StyledImage,
  StyledLink,
  StyledNavbar
} from "./styled/styled_navbar";

const NavBar = () => {
    const NavBarRef = useRef(null);

    const {user, login, logout, authReady} = useContext(AuthContext);
    console.log(user);

    useEffect(() => {
        let prevScrollPos = window.scrollY;
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const NavBarElement = NavBarRef.current;
      if (!NavBarElement) {
        return;
        }
      if (prevScrollPos > currentScrollPos) {
        NavBarElement.style.transform = "translateY(0)";
        } else {
        NavBarElement.style.transform = "translateY(-200px)";
        }
        prevScrollPos = currentScrollPos;
      }
        window.addEventListener('scroll', handleScroll)

        return() => {
            window.removeEventListener('scroll', handleScroll)
        }
    },[]);

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

  const [toggleMenu, setToggleMenu] = React.useState(false);
  const navigate = useNavigate();

  const NavLink = ({ href, onClick, children }) => {
    return (
      <StyledHeading as="h1">
        <StyledLink href={href} onClick={onClick}>
          {children}
        </StyledLink>
      </StyledHeading>
    );
  };

  return (
    <StyledNavbar
      ref={NavBarRef}
      translateY="0"
    >
      <StyledImage
        src={FD_Header}
        alt="app__logo"
      />
      {authReady && (
      <>
        <NavLink href="#Home" onClick={handleClick("Home")}>
          Home
        </NavLink>
        <NavLink href="#Menu" onClick={handleClick("Menu")}>
          Menu
        </NavLink>
        <NavLink href="#OrderOnline" onClick={handleClick("OrderOnline")}>
          Order Online
        </NavLink>
        <NavLink href="#Testimonials-section" onClick={handleClick("Testimonials")}>
          Testimonials
        </NavLink>
        <NavLink href="#About-section" onClick={handleClick("About")}>
          About
        </NavLink>
        <NavLink href="#Reservation-section" onClick={handleClick("Reservation")}>
          Reserve a Table
        </NavLink>
        {!user?(
          <Button
            size='md'
            colorScheme="blue"
            variant="outline"
            leftIcon={<MdOutlineLogin/>}
            as="h2"
            onClick={login}
            display={{base:"none",md:"flex",lg:"flex"}}
            fontSize={{base:"10px", md: "13px", lg:"20px"}}
            cursor="pointer"
          >
            Login/Sign Up
          </Button>
          ) : (
          <VStack>
            <Button
              size='md'
              colorScheme="red"
              variant="outline"
              leftIcon={<MdOutlineLogout/>}
              as="h2"
              onClick={logout}
              display={{base:"none",md:"flex",lg:"flex"}}
              fontSize={{base:"10px", md: "13px", lg:"20px"}}
              cursor="pointer"
            >
              logout
            </Button>
            <Text
              fontSize={{base: "10px", md: "12px", lg:"15px"}}
              fontWeight='light'
              color='orange.600'
              marginTop={{base:"0.1rem",md:"0.1rem",lg:"0.2rem"}}
            >
              Welcome <b>{user.user_metadata.full_name}</b>
            </Text>
          </VStack>
          )
        }
      </>
      )}
      <Heading display={{base:"flex",md:"none",lg:"none"}}>
        <GiHamburgerMenu color="rgb(183,94,87)"  fontSize={27} onClick={() => setToggleMenu(true)} />
      </Heading>
      {toggleMenu && (
        <VStack
          style={{
            position:"fixed",
            top:"0",
            left:"0",
            width:"100%",
            height:"130vh",
            transition:".5s ease",
            flexDirection:"column",
            zIndex:"5",
            background:"black",
            justifyContent:"flex-start",
            alignItems:"center",
          }}
        >
          <MdOutlineRestaurantMenu fontSize={27} className="overlay__close"
            style={{color:"azure",
              cursor:"pointer",
              position:"absolute",
              top:"15px",
              right:"40px"}}
              onClick={() => setToggleMenu(false)} />
            <ul
              style={{
                margin:"5rem auto",
                display:"fixed",
                listStyle:"none",
              }}
            >
              <li
                style={{
                margin:"1rem",
                cursor:"pointer",
                color:"azure",
                fontSize:"1.5rem",
                textAlign:"center",
                fontFamily:"calibri",
                border:"1px solid azure",
              }}
              >
                <a href="#Home-section" onClick={()=>{
                  setToggleMenu(false);
                  navigate("/Home")
                }}
                >
                  Home
                </a>
              </li>
              <li
                style={{
                margin:"1rem",
                cursor:"pointer",
                color:"azure",
                fontSize:"1.5rem",
                textAlign:"center",
                fontFamily:"calibri",
                border:"1px solid azure",
              }}
              >
                <a href="#Menu-section" onClick={() => {
                  setToggleMenu(false);
                  navigate("/Menu")
                  }}
                >
                  Menu
                </a>
              </li>
              <li
                style={{
                margin:"1rem",
                cursor:"pointer",
                color:"azure",
                fontSize:"1.5rem",
                textAlign:"center",
                fontFamily:"calibri",
                border:"1px solid azure",
              }}
              >
                <a href="#Menu-section" onClick={() => {
                  setToggleMenu(false);
                  navigate("/Menu")
                  }}
                >
                  Order Online
                </a>
              </li>
              <li
                style={{
                margin:"1rem",
                cursor:"pointer",
                color:"azure",
                fontSize:"1.5rem",
                textAlign:"center",
                fontFamily:"calibri",
                border:"1px solid azure",
              }}
              >
                <a href="#Testimonials-section" onClick={() => {
                  setToggleMenu(false);
                  navigate("/Testimonials")
                  }}
                >
                  Testimonials
                </a>
              </li>
              <li
                style={{
                margin:"1rem",
                cursor:"pointer",
                color:"azure",
                fontSize:"1.5rem",
                textAlign:"center",
                fontFamily:"calibri",
                border:"1px solid azure",
              }}
              >
                <a href="#About-section" onClick={() => {
                  setToggleMenu(false);
                  navigate("/About")
                  }}
                >
                  About Us
                </a>
              </li>
              <li
                style={{
                margin:"1rem",
                cursor:"pointer",
                color:"azure",
                fontSize:"1.5rem",
                textAlign:"center",
                fontFamily:"calibri",
                border:"1px solid azure",
              }}
              >
                <a href="#Reservation-section" onClick={() => {
                  setToggleMenu(false);
                  navigate("/Reservation")
                  }}
                >
                  Reserve a Table
                </a>
              </li>
              <li
                style={{
                padding:"0 3rem",
                margin:"1rem",
                cursor:"pointer",
                color:"azure",
                fontSize:"1.5rem",
                textAlign:"center",
                fontFamily:"calibri",
                border:"1px solid azure",
              }}
                onClick={() => {
                  setToggleMenu(false);
                  login()
                }}
              >
                Login/Sign Up
              </li>
            </ul>
        </VStack>
          )}
      </StyledNavbar>
      // </HStack>
  );
};

export default NavBar;