import React, { useEffect } from 'react';
import menudata from "../../../../database/menu.json";
import {
  BackButton,
  ButtonOrder,
  Calory,
  CategoryText,
  DetailDesc,
  DrinkText,
  Img,
  ItemName,
  ItemText,
  MenuText,
  OrderNowText,
  Path,
  PathAndBackButton,
  ProductDesc,
  ProductDetail,
  ProductHero,
  ProductInfoOrder,
  Rating,
  SizeAndOrder,
  SizeDesc,
  SizeText,
  Slash,
  Topping,
  ToppingDesc,
  ToppingDetailDesc,
  ToppingImg,
  ToppingList,
  ToppingName,
  ToppingText,
} from '../../../../styled/AllMenu/StyledMenu';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

export const CroffleOriginal = () => {
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

  useEffect(() => {
    scrollToTop();
  }, []);

  const props = menudata.find((menu) => menu.category === "Food" && menu.items[1].name === "Croffle Original" && menu.items[1].list[0].name === "Croffle Original");
  return (
    <ProductDetail id="main-menu-container">
      <PathAndBackButton>
        <Path>
          <MenuText onClick={() => handleClick("/AllMenu")}>Menu</MenuText>
          <Slash>/</Slash>
          <DrinkText>{props.category}</DrinkText>
          <Slash>/</Slash>
          <CategoryText
            onClick={() => handleClick(`/AllMenu/${props.items[1].name}`)}
          >{props.items[1].name}</CategoryText>
          <Slash>/</Slash>
          <ItemText>{props.items[1].list[0].name}</ItemText>
        </Path>
        <BackButton
          onClick={() => handleClick(`/AllMenu/${props.items[1].name}`)}
        >
          <FontAwesomeIcon icon={faChevronLeft} />&nbsp;Back
        </BackButton>
      </PathAndBackButton>
      <ProductHero background={props.items[1].background}>
        <Img loading="lazy" src={require(`../../../../images/${props.items[1].list[0].image}`)} alt={props.items[1].list[0].name} />
        <ProductDesc>
          <ItemName>{props.items[1].list[0].name}</ItemName>
          <Rating>{props.items[1].list[0].stars}★</Rating>
          <DetailDesc>{props.items[1].list[0].description}</DetailDesc>
          <Calory>{props.items[1].list[0].calories}</Calory>
        </ProductDesc>
      </ProductHero>
      <ProductInfoOrder>
        <SizeAndOrder>
          <SizeText>Size options</SizeText>
          <SizeDesc>
            Size : Croffle 30 g
          </SizeDesc>
          <ButtonOrder>
            <OrderNowText>Order Now</OrderNowText>
          </ButtonOrder>
        </SizeAndOrder>
        <Topping>
          <ToppingText>Add-ins Dipping Sauce</ToppingText>
          <ToppingList>
            <ToppingImg loading="lazy" src={require('../../../../images/Dipping_sauce.png')} alt='dipping sauce' />
            <ToppingDesc>
              <ToppingName>Dalgona dipping sauce</ToppingName>
              <ToppingDetailDesc>
                  Delicious dalgona-shaped dipping sauces for every dalgona flavour to enjoy with croffle.
              </ToppingDetailDesc>
            </ToppingDesc>
          </ToppingList>
        </Topping>
      </ProductInfoOrder>
    </ProductDetail>
  )
}
