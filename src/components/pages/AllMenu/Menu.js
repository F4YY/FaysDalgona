import React from "react";
import menudata from "../../database/menu.json";
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
} from "../../styled/styled_menu";
import { MainMenu } from "./MainMenu";
import { Route, Routes, useNavigate } from "react-router-dom";
import { DalgonaIced } from "./Drinks/DalgonaIced/DalgonaIced";
import { RegularIced } from "./Drinks/RegularIced/RegularIced";
import { RegularHot } from "./Drinks/RegularHot/RegularHot";
import { MieNyemek } from "./Food/MieNyemek/MieNyemek";
import { DalCro } from "./Combo/DalCro/DalCro";
import { Combo123 } from "./Combo/Combo123/Combo123";
import { Croffle } from "./Food/Croffle/Croffle";
import { SateSeafood } from "./Food/SateBaksoSeafood/SateSeafood";

export default function Menu() {
  const navigate = useNavigate();
  const handleClick = (anchor) => {
    navigate(anchor);
    scrollToTop();
  }
  const scrollToTop = () => {
    const mainMenuContainer = document.getElementById("main-menu-container");
    if (mainMenuContainer) {
      mainMenuContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <Wrapper id='AllMenu-section'>
      <TopNavigation >
        <LeftNav>
          <Logo loading="lazy" src={require("../../images/FD_Header.png")} alt="logo" />
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
          <MenuHeader id="main-menu-container">
            Menu
          </MenuHeader>
          <Routes>
            <Route path="/" element={<MainMenu scrollToTop={scrollToTop}/>} />
            <Route path="MainMenu" element={<MainMenu scrollToTop={scrollToTop}/>} />
            <Route path="Dalgona Iced" element={<DalgonaIced />} />
            <Route path="Regular Iced" element={<RegularIced />} />
            <Route path="Regular Hot" element={<RegularHot />} />
            <Route path="Mie Nyemek" element={<MieNyemek />} />
            <Route path="Simple DalCro" element={<DalCro />} />
            <Route path="Combo 123" element={<Combo123 />} />
            <Route path="Croffle Original" element={<Croffle />} />
            <Route path="Sate Bakso Seafood" element={<SateSeafood />} />
          </Routes>
        </RightMenu>
      </MainContent>
    </Wrapper>
  );
}