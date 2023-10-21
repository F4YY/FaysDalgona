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
  MenuCategory,
  MenuCategoryGroup,
  MenuHeader,
  MenuItem,
  MenuItemGroup,
  MenuItemImage,
  MenuItemText,
  MenuSection,
  MenuTitle,
  RightMenu,
  RightNav,
  SignInButton,
  TopNavigation,
  Wrapper,
} from "../styled/AllMenu/StyledMenu";

export default function Menu() {
  return (
    <Wrapper id='AllMenu-section'>
      <TopNavigation >
        <LeftNav>
          <Logo loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/dc0728cf-66a4-4138-a841-90f1c4a2627d?apiKey=1bea62adcf07414aa16974ab6f37361e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc0728cf-66a4-4138-a841-90f1c4a2627d?apiKey=1bea62adcf07414aa16974ab6f37361e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc0728cf-66a4-4138-a841-90f1c4a2627d?apiKey=1bea62adcf07414aa16974ab6f37361e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc0728cf-66a4-4138-a841-90f1c4a2627d?apiKey=1bea62adcf07414aa16974ab6f37361e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc0728cf-66a4-4138-a841-90f1c4a2627d?apiKey=1bea62adcf07414aa16974ab6f37361e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc0728cf-66a4-4138-a841-90f1c4a2627d?apiKey=1bea62adcf07414aa16974ab6f37361e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc0728cf-66a4-4138-a841-90f1c4a2627d?apiKey=1bea62adcf07414aa16974ab6f37361e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc0728cf-66a4-4138-a841-90f1c4a2627d?apiKey=1bea62adcf07414aa16974ab6f37361e&"/>
          <MenuItem>Menu</MenuItem>
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
          <MenuItem>Menu</MenuItem>
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
              <MenuItem key={item.name}>{item.name}</MenuItem>
              ))}
            </MenuSection>
          ))}
        </LeftMenu>
        <RightMenu>
          <MenuHeader>
            Menu
          </MenuHeader>
          {menudata.map((menu) => (
            <>
              <MenuCategory>
                {menu.category}
              </MenuCategory>
              <MenuCategoryGroup>
                {menu.items.map((item) => (
                <MenuItemGroup key={item.name}>
                  <MenuItemImage src={item.imageUrl} alt={item.name}/>
                  <MenuItemText>
                    {item.name}
                  </MenuItemText>
                </MenuItemGroup>
                ))}
              </MenuCategoryGroup>
            </>
          ))}
        </RightMenu>
      </MainContent>
    </Wrapper>
  );
}