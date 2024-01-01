import styled, {css} from "styled-components";
import { Button, HStack, Image } from "@chakra-ui/react";
import { fadeInLeft, fadeInRight } from "./styled_menu";
import { MdOutlineRestaurantMenu } from "react-icons/md";

export const StyledNavbar = styled(HStack)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  font-weight: var(--bold);
  letter-spacing: 0.04rem;
  color: var(--darkred);
  background-color: var(--lightorange);
  padding: 0.5rem 1.2rem;
  border-bottom: .3rem groove rgb(255, 129, 0.5);
  z-index:5;
  @media (max-width: 991px) {
    font-size: .75rem;
  }
`
export const StyledImage = styled(Image)`
  display: flex;
  width: 65px;
  height:auto;
  border-radius: 50%;
  @media (max-width: 991px) {
    width: 55px;
  }
  @media (max-width: 640px) {
    width: 45px;
  }
`
export const UserName = styled.h4`
  font-size: .8rem;
  font-weight: var(--regular);
  text-align: center;
`;
export const UserPicture = styled.img`
  display: flex;
  width: 30px;
  height:30px;
  object-fit: cover;
  object-position: center;
  aspect-ratio: 1/1;
  border-radius: 50%;
`;
export const StyledUl = styled.ul`
  display: flex;
  flex-direction: row;
  width:100%;
  list-style: none;
  justify-content: space-around;
  align-items: center;
  gap: .5rem;
  @media (max-width: 991px) {
    gap: .3rem;
  }
`;
export const StyledUlmobile = styled(StyledUl)`
  display: flex;
  flex-direction: column;
  margin: 4rem 0 0;
`;
export const StyledLi = styled.a`
  text-decoration: none;
  &:hover {
    color: var(--darkblue);
    line-height: 105%;
  }
  ${props =>
    props.current && css`
    background-color: var(--white);
      box-shadow: 2px 4px 3px rgba(255, 140, 0, 0.3);
      border: 1px solid rgba(255, 140, 0, 0.05);
      border-radius: 10px;
      padding: 0.4rem .8rem;
    @media (max-width: 991px) {
      border-radius: 5px;
      padding: 0.3rem .5rem;
    }
  `
}
  @media (max-width: 640px) {
    display: none;
  }
`;
export const StyledLiMobile = styled(StyledLi)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`
export const LoginButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 1px solid;
  padding: .4rem .8rem;
  &:hover {
    color: var(--darkblue);
    border-color: var(--darkblue);
    background-color: var(--lightblue);
  }
  @media (max-width: 991px) {
    font-size: .8rem;
  }
  @media (max-width: 640px) {
    display: none;
  }
`
export const LogoutButton = styled(LoginButton)`
`
export const BurgerButton = styled.div`
  display: none;
  font-size: 1.6rem;
  color: var(--darkorange);
  @media (max-width: 640px) {
    display: flex;
  }
`;
export const WrappedMobileMenu = styled.div`
  display: none;
  @media (max-width: 640px) {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: var(--white);
    gap: .5rem;
  }
`;
export const AnimatedWrappedMobileMenu = styled(WrappedMobileMenu)`
  animation-duration: 0.3s;
  animation-timing-function: ease-in;
  animation-fill-mode: both;
  animation-name: ${({ toggleMenu }) =>
    toggleMenu ? fadeInLeft : fadeInRight};
`;
export const SpoonForkIcon = styled(MdOutlineRestaurantMenu)`
  display: flex;
  width: 1.6rem;
  height:auto;
  position: absolute;
  top: 17px;
  right: 28px;
  color: var(--darkorange);
`
export const MobileMenuButton = styled(Button).attrs({
  colorScheme: 'orange',
  variant: 'outline',
})`
  width: 280px;
  padding: .5rem 3rem;
  margin: .5rem;
  cursor: pointer;
  color: red;
`;

