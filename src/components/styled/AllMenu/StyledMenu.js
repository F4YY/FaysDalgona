import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
`;

export const TopNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 20px 20px;

  @media (max-width: 991px) {
    align-items: stretch;
  }

  @media (max-width: 640px) {
    display: none;
  }
`;

export const LeftNav = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 991px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const Logo = styled.img`
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  width: 60px;
  overflow: hidden;
`;

export const MenuItem = styled.h2`
  color: grey;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 105%;
  cursor: pointer;
`;

export const RightNav = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;

  @media (max-width: 991px) {
    justify-content: flex-end;
  }
`;

export const FindStore = styled.div`
  display: flex;
  align-items: center;
  gap: 0px;
`;

export const LocationIcon = styled.img`
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  width: 32px;
  overflow: hidden;
`;

export const LocationText = styled.div`
  color: rgba(0, 0, 0, 0.87);
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 105%;
  letter-spacing: 0.16px;
  white-space: nowrap;
`;

export const SignInButton = styled.div`
  color: rgba(0, 0, 0, 0.87);
  text-align: center;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 84%;
  align-self: stretch;
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  border: 1px solid rgba(0, 0, 0, 0.87);
  width: 80px;
  max-width: 100%;
  padding: 7px 10px;

  @media (max-width: 991px) {
    white-space: initial;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    margin: auto;
  }
`;

export const JoinButton = styled.div`
  color: #fff;
  text-align: center;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 84%;
  letter-spacing: 0.16px;
  align-self: stretch;
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  border: 1px solid #000;
  background-color: #000;
  width: 102px;
  max-width: 100%;
  padding: 7px 10px;

  @media (max-width: 991px) {
    white-space: initial;
    flex-grow: 1;
    margin: auto;
  }
`;

export const AuxiliaryNavigation = styled.div`
  background-color: rgba(248, 142, 66, 0.23);
  display: flex;
  padding: 17px 20px;

  @media (max-width: 991px) {
    max-width: 100%;
  }
  @media (max-width: 640px) {
    display: none;
  }
`;

export const AuxNavList = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  margin: 0 0 0 40px;
  @media (max-width: 991px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const MainContent = styled.div`
  display: flex;
  width: 100%;
  margin: 40px auto 50px;

  @media (max-width: 991px) {
    width: 100%;
    margin:0;
  }

  @media (max-width: 640px) {
    flex-direction: row;
  }
`;

export const LeftMenu = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 40px;
  margin: 12px 0 0 60px;

  @media (max-width: 991px) {
    margin: 40px 20px 0;
  }

  @media (max-width: 640px) {
    display: none;
  }
`;

export const MenuSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

export const MenuTitle = styled.div`
  color: rgba(0, 0, 0, 0.87);
  font-family: Roboto Condensed, sans-serif;
  font-size: 26px;
  font-weight: 500;
  line-height: 109.61%;
  letter-spacing: 0.16px;
  align-self: start;
  max-width: 100%;
`;

export const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const RightMenu = styled.div`
  display: flex;
  width:100%;
  flex-direction: column;
  @media (max-width: 991px) {
    width: 70%;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 30px 20px 50px;
  }
  @media (max-width: 640px) {
    width: 90%;
  }
`;

export const MenuHeader = styled.div`
  color: rgba(255, 243, 243, 0.87);
  font-family: Roboto, sans-serif;
  font-size: 32px;
  font-weight: 500;
  line-height: 121.19%;
  letter-spacing: 0.16px;
  align-self: start;
  width: 890px;
  align-items: flex-start;
  border-radius: 10px 0px 0px 10px;
  background: linear-gradient(180deg,rgba(214, 192, 0, 0.9) 0%,rgba(184, 165, 0, 0.9) 100%);
  max-width: 100%;
  padding: 7px 20px;

  @media (max-width: 991px) {
    padding-right: 10px;
  }
`;

export const MenuCategoryGroup = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 40px;
  row-gap: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.27);
  padding: 0 0 20px;
  margin: 20px 0 0;
`
export const MenuCategory = styled.div`
  color: rgba(0, 0, 0, 0.87);
  font-family: Roboto Condensed, sans-serif;
  font-size: 26px;
  font-weight: 500;
  line-height: 138.46%;
  letter-spacing: 0.16px;
  align-self: start;
  margin: 30px 0 0;
`;

export const MenuItemGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

export const MenuItemImage = styled.img`
  max-width: 112px;
  aspect-ratio: 1;
  cursor: pointer;
  animation: ${fadeInLeft} 0.7s ease-in-out;
  &:hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
  }
`;

export const MenuItemText = styled.h2`
  color: grey;
  font-family: Roboto Condensed, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 142.5%;
  letter-spacing: 0.16px;
  align-self: center;
  max-width: 160px;
  cursor: pointer;
  animation: ${fadeInLeft} 1s ease-in-out;
  &:hover {
    color: #000;
  }
`;