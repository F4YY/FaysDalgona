import * as React from "react";
import {
  Category,
  Container,
  DalgonaIcedContainer,
  DrinkImage,
  DrinkLink,
  DrinksContainer,
  LeftContent,
  Link,
  RegularHotContainer,
  RegularIcedContainer,
  RightContent,
  StyledTextCategory,
  StyledTextMenu,
  Text
} from "../../styled/AllMenu/StyledContent";

export default function Menu() {
  return (
      <Container>
        <LeftContent>
          <Category>
          <Link href="...">Drinks</Link>
          <Text href="...">Dalgona Iced</Text>
          <Text href="...">Regular Iced</Text>
          <Text href="...">Regular Hot</Text>
          </Category>
          <Category>
          <Link href="...">Food</Link>
          <Text href="...">Mie Nyemek</Text>
          <Text href="...">Croffle Original</Text>
          <Text href="...">Sate Bakso Seafood</Text>
          </Category>
          <Category>
          <Link href="...">Combo</Link>
          <Text href="...">Simple DalCro</Text>
          <Text href="...">Combo 123</Text>
          </Category>
          <Category>
          <Link href="...">Topping</Link>
          <Text href="...">Lotus Bischoff Crumbles</Text>
          <Text href="...">Choco Crispy Balls</Text>
          </Category>
        </LeftContent>
        <RightContent>
          <StyledTextMenu href="...">Menu</StyledTextMenu>
          <StyledTextCategory href="...">Drinks</StyledTextCategory>
          <DrinksContainer>
            <DalgonaIcedContainer>
              <DrinkImage loading="lazy" src={require(`../../images/Dalgona.jpg`)} alt="Dalgona Iced"/>
              <DrinkLink href="...">Dalgona Iced</DrinkLink>
            </DalgonaIcedContainer>
            <RegularIcedContainer>
              <DrinkImage loading="lazy" src={require(`../../images/Regular_iced.jpeg`)} alt="Regular Iced" />
              <DrinkLink href="...">Regular Iced</DrinkLink>
            </RegularIcedContainer>
            <RegularHotContainer>
              <DrinkImage loading="lazy" src={require(`../../images/Regular_hot.jpeg`)} alt="Regular Hot" />
              <DrinkLink href="...">Regular Hot</DrinkLink>
            </RegularHotContainer>
          </DrinksContainer>
          <StyledTextCategory href="...">Food</StyledTextCategory>
          <DrinksContainer>
            <DalgonaIcedContainer>
              <DrinkImage loading="lazy" src={require(`../../images/mie_nyemek.jpg`)} alt="Mie Nyemek" />
              <DrinkLink href="...">Mie Nyemek</DrinkLink>
            </DalgonaIcedContainer>
            <RegularIcedContainer>
              <DrinkImage loading="lazy" src={require(`../../images/Croffle2.jpg`)} alt="Croffle Original" />
              <DrinkLink href="...">Croffle Original</DrinkLink>
            </RegularIcedContainer>
            <RegularHotContainer>
              <DrinkImage loading="lazy" src={require(`../../images/FD_SateBaksoSeafood.jpg`)} alt="Sate Bakso Seafood" />
              <DrinkLink href="...">Sate Bakso Seafood</DrinkLink>
            </RegularHotContainer>
          </DrinksContainer>
          <StyledTextCategory href="...">Combo</StyledTextCategory>
          <DrinksContainer>
            <DalgonaIcedContainer>
              <DrinkImage loading="lazy" src={require(`../../images/DalCro.png`)} alt="Simple DalCro" />
              <DrinkLink href="...">Simple DalCro</DrinkLink>
            </DalgonaIcedContainer>
            <RegularIcedContainer>
              <DrinkImage loading="lazy" src={require(`../../images/Combo123.png`)} alt="Combo 123" />
              <DrinkLink href="...">Combo 123</DrinkLink>
            </RegularIcedContainer>
          </DrinksContainer>
          <StyledTextCategory href="...">Topping</StyledTextCategory>
          <DrinksContainer>
            <DalgonaIcedContainer>
              <DrinkImage loading="lazy" src={require(`../../images/lotus_bischoff.jpg`)} alt="Lotus Bischoff Crumbles" />
              <DrinkLink href="...">Lotus Bischoff Crumbles</DrinkLink>
            </DalgonaIcedContainer>
            <RegularIcedContainer>
              <DrinkImage loading="lazy" src={require(`../../images/Choco_crispyballs.jpg`)} alt="Choco Crispy Balls" />
              <DrinkLink href="...">Choco Crispy Balls</DrinkLink>
            </RegularIcedContainer>
          </DrinksContainer>
        </RightContent>
      </Container>
  );
}