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
  RatingWrap,
  SizeAndOrder,
  SizeDesc,
  SizeText,
  Slash,
  SpicyImg,
  SpicyText,
  Topping,
} from '../../../../styled/AllMenu/StyledMenu';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

export const SateBaksoSeafood = () => {
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

  const props = menudata.find((menu) => menu.category === "Food" && menu.items[2].name === "Sate Bakso Seafood" && menu.items[2].list[0].name === "Sate Bakso Seafood");
  return (
    <ProductDetail id="main-menu-container">
      <PathAndBackButton>
        <Path>
          <MenuText onClick={() => handleClick("/AllMenu")}>Menu</MenuText>
          <Slash>/</Slash>
          <DrinkText>{props.category}</DrinkText>
          <Slash>/</Slash>
          <CategoryText
            onClick={() => handleClick(`/AllMenu/${props.items[2].name}`)}
          >{props.items[2].name}</CategoryText>
          <Slash>/</Slash>
          <ItemText>{props.items[2].list[0].name}</ItemText>
        </Path>
        <BackButton
          onClick={() => handleClick(`/AllMenu/${props.items[2].name}`)}
        >
          <FontAwesomeIcon icon={faChevronLeft} />&nbsp;Back
        </BackButton>
      </PathAndBackButton>
      <ProductHero background={props.items[2].background}>
        <Img loading="lazy" src={require(`../../../../images/${props.items[2].list[0].image}`)} alt={props.items[2].list[0].name} />
        <ProductDesc>
          <ItemName>{props.items[2].list[0].name}</ItemName>
          <RatingWrap>
            <Rating>
              {props.items[2].list[0].stars}★
            </Rating>
            <text>
              {props.items[2].list[0].reviews}&nbsp;reviews
            </text>
          </RatingWrap>
          <DetailDesc>{props.items[2].list[0].description}</DetailDesc>
          <Calory>{props.items[2].list[0].calories}</Calory>
        </ProductDesc>
      </ProductHero>
      <ProductInfoOrder>
        <SizeAndOrder>
          <SizeText>Size options</SizeText>
          <SizeDesc>
            Size : 5 skewers of satay
          </SizeDesc>
          <ButtonOrder href="https://gofood.link/a/yHFDprE" target="_blank" rel="noreferrer">
            <OrderNowText>Order Now</OrderNowText>
          </ButtonOrder>
        </SizeAndOrder>
        <Topping>
          <SpicyText>Spicy Levels</SpicyText>
          <SpicyImg loading="lazy" src={require('../../../../images/Spicy_level.jpg')} alt='spicy level' />
        </Topping>
      </ProductInfoOrder>
    </ProductDetail>
  )
}
