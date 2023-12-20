import styled from "styled-components";
import { Button, HStack, Heading, Image } from "@chakra-ui/react";

export const StyledNavbar = styled(HStack)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: azure;
  padding: 0.5rem 1.2rem;
  transition: transform 0.3s ease-in-out;
  font-weight: bold;
  font-size: 18px;
  color: rgb(73, 94, 87);
  z-index: 5;
`
export const StyledImage = styled(Image)`
  display: flex;
  width: 45px;
  height:auto;
  border-radius: 50%;
  @media (min-width: 768px) {
    width: 50px;
  }
  @media (min-width: 1024px) {
    width: 70px;
  }
`
export const UserPicture = styled(Image)`
  display: flex;
  width: 30px;
  height:30px;
  object-fit: cover;
  object-position: center;
  aspect-ratio: 1/1;
  border-radius: 50%;
`;
export const StyledHeading = styled(Heading)`
  font-size: 10px;
  @media (min-width: 768px) {
    font-size: 13px;
  }
  @media (min-width: 1024px) {
    font-size: 20px;
  }
  display: none;
  @media (min-width: 768px) {
    display: flex;
  }
  @media (min-width: 1024px) {
    display: flex;
  }
`;
export const StyledLink = styled.a`
  text-decoration: none;
  color: rgb(203, 89, 6, 0.8);
  &:hover {
    color: rgb(150, 63, 1, 1);
  }
`;
export const StyledButton = styled(Button).attrs({
  size: "md",
  colorScheme: "blue",
  variant: "outline",
  as: "h2",
})`
  display: none;
  font-size: 16px;
  border-radius: 20px;
  @media (min-width: 768px) {
    font-size: 13px;
  }
  @media (min-width: 1024px) {
    font-size: 20px;
  }
  @media (min-width: 768px) {
    display: flex;
  }
  @media (min-width: 1024px) {
    display: flex;
  }
  cursor: pointer;
`;
export const MobileMenuButton = styled(Button)`
  padding: .5rem 3rem;
  margin: .5rem;
  cursor: pointer;
  color: red;
  font-size: 1.2rem;
  text-align: center;
  font-family: calibri;
`;

