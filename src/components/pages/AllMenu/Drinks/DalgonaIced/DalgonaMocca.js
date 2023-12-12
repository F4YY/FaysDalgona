import React, { useEffect } from 'react';
import menudata from "../../../../database/menu.json";
import {
  BackButton,
  ButtonOrder,
  Calory,
  CategoryText,
  DetailDesc,
  DrinkText,
  FeedbackArea,
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
  RatingImg,
  RatingItemName,
  RatingMenuWrap,
  RatingStar,
  RatingWrap,
  SizeAndOrder,
  SizeDesc,
  SizeText,
  Slash,
  StarsReview,
  SubmitRating,
  Topping,
  ToppingDesc,
  ToppingDetailDesc,
  ToppingImg,
  ToppingList,
  ToppingName,
  ToppingText,
  YellowStars,
} from '../../../../styled/styled_menu';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faClose, faStar } from '@fortawesome/free-solid-svg-icons';
import { Alert, AlertDescription, AlertIcon, AlertTitle } from '@chakra-ui/react';

export const DalgonaMocca = ({
  stars,
  rateMenu,
  setRateMenu,
  currentRating,
  setCurrentRating,
  hoverRating,
  setHoverRating,
  authReady,
  handleRateMenu,
  handleSubmit,
  showAlert,
  setShowAlert,
  feedbackValue,
  setFeedbackValue,
  setMenuPic,
  setMenuName
}) => {
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

  const props = menudata.menu.find((menu) => menu.category === "Drinks" && menu.items[0].name === "Dalgona Iced" && menu.items[0].list[5].name === "Dalgona Moccaccino");
  return (
    <>
    <ProductDetail
      id="main-menu-container"
      rateMenu={rateMenu}
      showAlert={showAlert}
    >
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
          <ItemText>{props.items[0].list[5].name}</ItemText>
        </Path>
        <BackButton
          onClick={() => handleClick(`/AllMenu/${props.items[0].name}`)}
        >
          <FontAwesomeIcon icon={faChevronLeft} />&nbsp;Back
        </BackButton>
      </PathAndBackButton>
      <ProductHero background={props.items[0].background}>
        <Img loading="lazy" src={require(`../../../../images/${props.items[0].list[5].image}`)} alt={props.items[0].list[5].name} />
        <ProductDesc>
          <ItemName>{props.items[0].list[5].name}</ItemName>
          <RatingWrap>
            <StarsReview>
              <Rating>
                {props.items[0].list[1].stars}★
              </Rating>
              <text>
                {props.items[0].list[1].reviews}&nbsp;reviews
              </text>
            </StarsReview>
            {authReady && (
              <h2
                onClick={handleRateMenu}
              >
                Rate this menu
              </h2>
            )}
          </RatingWrap>
          <DetailDesc>{props.items[0].list[5].description}</DetailDesc>
          <Calory>{props.items[0].list[5].calories}</Calory>
        </ProductDesc>
      </ProductHero>
      <ProductInfoOrder>
        <SizeAndOrder>
          <SizeText>Size options</SizeText>
          <SizeDesc>
            Size : Oval cup 16 oz
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
        </Topping>
      </ProductInfoOrder>
    </ProductDetail>
    {rateMenu && (
      <RatingStar>
        <FontAwesomeIcon
          className="close"
          icon={faClose}
          onClick={() => setRateMenu(false)}
        />
        <p>Tell others what you think.</p>
        <RatingMenuWrap>
          <RatingImg loading="lazy" src={require('../../../../images/Dalg_Moca.jpg')} alt='dalgona mocca' />
          <RatingItemName>{props.items[0].list[5].name}</RatingItemName>
        </RatingMenuWrap>
        <YellowStars>
          {stars.map((_, index) => {
            return (
              <FontAwesomeIcon
                className="star"
                icon={faStar}
                key={index}
                color={(hoverRating || currentRating) > index ? "#ffc107" : "#D6D7C5"}
                onClick={() => setCurrentRating(index + 1)}
                onMouseEnter={() => setHoverRating(index + 1)}
                onMouseLeave={() => setHoverRating(undefined)}
              />
            );
          })}
        </YellowStars>
        <FeedbackArea
          placeholder="Leave your review here..."
          value={feedbackValue}
          onChange={(e) => setFeedbackValue(e.target.value)}
        >
        </FeedbackArea>
        <SubmitRating
          onClick={() => {
            console.log('setMenuPic:', setMenuPic);
            console.log('setMenuName:', setMenuName);
            setMenuPic('Dalg_Moca.jpg');
            setMenuName(props.items[0].list[5].name);
            handleSubmit();
          }}
        >
          Submit
        </SubmitRating>
      </RatingStar>
    )}
    {showAlert && (
      <Alert
        position='fixed'
        top='50%'
        left='50%'
        transform='translate(-50%, -50%)'
        status='error'
        justifyContent='center'
        w={{base:"95%",md:"60%",lg:"40%"}}
        minH={{base:"30%",md:"40%",lg:"40%"}}
        borderRadius='1rem'
        display={{base:"flex",md:"flex",lg:"flex"}}
        flexDir={{base:'column', md:'row', lg:'row'}}
      >
        <div style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          }}
        >
          <FontAwesomeIcon
            size='lg'
            cursor="pointer"
            icon={faClose}
            onClick={() => setShowAlert(false)}
          />
        </div>
        <AlertIcon />
        <AlertTitle>You're not logged in!</AlertTitle>
        <AlertDescription>Please login to rate a menu.</AlertDescription>
      </Alert>
    )}
    </>
  )
}
