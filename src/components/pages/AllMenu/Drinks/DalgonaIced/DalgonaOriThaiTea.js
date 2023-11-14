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

export const DalgonaOriThaiTea = () => {
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

  const props = menudata.find((menu) => menu.category === "Drinks" && menu.items[0].name === "Dalgona Iced" && menu.items[0].list[3].name === "Dalgona Original Thai Tea");
  return (
    <ProductDetail id="main-menu-container">
      <PathAndBackButton>
        <Path>
          <MenuText onClick={() => handleClick("/AllMenu")}>Menu</MenuText>
          <Slash>/</Slash>
          <DrinkText>{props.category}</DrinkText>
          <Slash>/</Slash>
          <CategoryText
            onClick={() => handleClick(`/AllMenu/${props.items[0].name}`)}
          >{props.items[0].name}</CategoryText>
          <Slash>/</Slash>
          <ItemText>{props.items[0].list[3].name}</ItemText>
        </Path>
        <BackButton
          onClick={() => handleClick(`/AllMenu/${props.items[0].name}`)}
        >
          <FontAwesomeIcon icon={faChevronLeft} />&nbsp;Back
        </BackButton>
      </PathAndBackButton>
      <ProductHero background={props.items[0].background}>
        <Img loading="lazy" src={require(`../../../../images/${props.items[0].list[3].image}`)} alt={props.items[0].list[3].name} />
        <ProductDesc>
          <ItemName>{props.items[0].list[3].name}</ItemName>
          <Rating>{props.items[0].list[3].stars}★</Rating>
          <DetailDesc>{props.items[0].list[3].description}</DetailDesc>
          <Calory>{props.items[0].list[3].calories}</Calory>
        </ProductDesc>
      </ProductHero>
      <ProductInfoOrder>
        <SizeAndOrder>
          <SizeText>Size options</SizeText>
          <SizeDesc>
            Size : Oval cup 16 oz
          </SizeDesc>
          <ButtonOrder>
            <OrderNowText>Order Now</OrderNowText>
          </ButtonOrder>
        </SizeAndOrder>
        <Topping>
          <ToppingText>Add-ins Topping</ToppingText>
          <ToppingList>
            <ToppingImg loading="lazy" src={require('../../../../images/lotus_bischoff.jpg')} alt='lotus bischoff' />
            <ToppingDesc>
              <ToppingName>Lotus Biscoff Crumbles</ToppingName>
              <ToppingDetailDesc>
                cookie crumbs made from Lotus Biscoff cookies, known for their
                caramelized flavor and hint of cinnamon.
              </ToppingDetailDesc>
            </ToppingDesc>
          </ToppingList>
          <ToppingList>
            <ToppingImg loading="lazy" src={require('../../../../images/Choco_crispyballs.jpg')} alt='choco crispy ball' />
            <ToppingDesc>
              <ToppingName>Choco Crispy Balls</ToppingName>
              <ToppingDetailDesc>
                delicious bite-sized treats made from crispy rice cereal coated
                in rich chocolate
              </ToppingDetailDesc>
            </ToppingDesc>
          </ToppingList>
        </Topping>
      </ProductInfoOrder>
    </ProductDetail>
  )
}
