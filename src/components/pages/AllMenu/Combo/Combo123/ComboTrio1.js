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

export const ComboTrio1 = () => {
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

  const props = menudata.find((menu) => menu.category === "Combo" && menu.items[1].name === "Combo 123" && menu.items[1].list[4].name === "Combo Trio 1");
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
          <ItemText>{props.items[1].list[4].name}</ItemText>
        </Path>
        <BackButton
          onClick={() => handleClick(`/AllMenu/${props.items[1].name}`)}
        >
          <FontAwesomeIcon icon={faChevronLeft} />&nbsp;Back
        </BackButton>
      </PathAndBackButton>
      <ProductHero background={props.items[1].background}>
        <Img loading="lazy" src={require(`../../../../images/${props.items[1].list[4].image}`)} alt={props.items[1].list[4].name} />
        <ProductDesc>
          <ItemName>{props.items[1].list[4].name}</ItemName>
          <Rating>{props.items[1].list[4].stars}★</Rating>
          <DetailDesc>{props.items[1].list[4].description}</DetailDesc>
          <Calory>{props.items[1].list[4].calories}</Calory>
        </ProductDesc>
      </ProductHero>
      <ProductInfoOrder>
        <SizeAndOrder>
          <SizeText>Size options</SizeText>
          <SizeDesc>
            <h3><b>Dalgona</b> : cup oval 16 oz</h3>
            <h3><b>Croffle</b> : croissant dough 30 g</h3>
            <h3><b>Dipping sauce</b> : cup 60 ml</h3>
          </SizeDesc>
          <ButtonOrder href="https://gofood.link/a/yHFDprE" target="_blank" rel="noreferrer">
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
          <ToppingText style={{ marginTop: "20px" }}>Add-ins Dipping Sauce</ToppingText>
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