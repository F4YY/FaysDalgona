import React from "react";
import menudata from "../database/menu.json";
import {
  AuxNavList,
  AuxiliaryNavigation,
  FindStore,
  JoinButton,
  LeftMenu,
  LeftNav,
  LocationIcon,
  LocationText,
  Logo,
  MainContent,
  MenuHeader,
  MenuItem,
  MenuItemList,
  MenuSection,
  MenuTitle,
  RightMenu,
  RightNav,
  SignInButton,
  TopNavigation,
  Wrapper,
} from "../styled/AllMenu/StyledMenu";
import { MainMenu } from "./AllMenu/MainMenu";
import { Route, Routes, useNavigate } from "react-router-dom";
import { DalgonaIced } from "./AllMenu/DalgonaIced";
import { RegularIced } from "./AllMenu/RegularIced";
import { RegularHot } from "./AllMenu/RegularHot";
import { MieNyemek } from "./AllMenu/MieNyemek";
import { DalCro } from "./AllMenu/DalCro";
import { Combo123 } from "./AllMenu/Combo123";

export default function Menu() {
  const navigate = useNavigate();
  const handleClick = (anchor) => {
    navigate(anchor);
  }
  return (
    <Wrapper id='AllMenu-section'>
      <TopNavigation >
        <LeftNav>
          <Logo loading="lazy" src={require("../images/FD_Header.png")} alt="logo" />
          <MenuItem onClick={() => handleClick("MainMenu")}>Menu</MenuItem>
          <MenuItem>Rewards</MenuItem>
          <MenuItem>Gift Cards</MenuItem>
        </LeftNav>
        <RightNav>
          <FindStore>
            <LocationIcon loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/53a077a9-ec9c-4818-93da-3252f1f94d5a?apiKey=1bea62adcf07414aa16974ab6f37361e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/53a077a9-ec9c-4818-93da-3252f1f94d5a?apiKey=1bea62adcf07414aa16974ab6f37361e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/53a077a9-ec9c-4818-93da-3252f1f94d5a?apiKey=1bea62adcf07414aa16974ab6f37361e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/53a077a9-ec9c-4818-93da-3252f1f94d5a?apiKey=1bea62adcf07414aa16974ab6f37361e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/53a077a9-ec9c-4818-93da-3252f1f94d5a?apiKey=1bea62adcf07414aa16974ab6f37361e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/53a077a9-ec9c-4818-93da-3252f1f94d5a?apiKey=1bea62adcf07414aa16974ab6f37361e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/53a077a9-ec9c-4818-93da-3252f1f94d5a?apiKey=1bea62adcf07414aa16974ab6f37361e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/53a077a9-ec9c-4818-93da-3252f1f94d5a?apiKey=1bea62adcf07414aa16974ab6f37361e&"/>
            <LocationText>Find a store</LocationText>
          </FindStore>
          <SignInButton>Sign in</SignInButton>
          <JoinButton>Join now</JoinButton>
        </RightNav>
      </TopNavigation>
      <AuxiliaryNavigation>
        <AuxNavList>
          <MenuItem onClick={() => handleClick("MainMenu")}>Menu</MenuItem>
          <MenuItem>Featured</MenuItem>
          <MenuItem>Previous</MenuItem>
          <MenuItem>Favorites</MenuItem>
        </AuxNavList>
      </AuxiliaryNavigation>
      <MainContent>
        <LeftMenu>
          {menudata.map((menu) => (
            <MenuSection key={menu.category}>
              <MenuTitle>
                {menu.category}
              </MenuTitle>
              {menu.items.map((item) => (
              <MenuItemList
                key={item.name}
                onClick={() => handleClick(item.name)}
              >
                {item.name}
              </MenuItemList>
              ))}
            </MenuSection>
          ))}
        </LeftMenu>
        <RightMenu>
          <MenuHeader>
            Menu
          </MenuHeader>
          <Routes>
            <Route path="/" element={<MainMenu />} />
            <Route path="MainMenu" element={<MainMenu />} />
            <Route path="Dalgona Iced" element={<DalgonaIced />} />
            <Route path="Regular Iced" element={<RegularIced />} />
            <Route path="Regular Hot" element={<RegularHot />} />
            <Route path="Mie Nyemek" element={<MieNyemek />} />
            <Route path="Simple DalCro" element={<DalCro />} />
            <Route path="Combo 123" element={<Combo123 />} />
          </Routes>
        </RightMenu>
      </MainContent>
    </Wrapper>
  );
}