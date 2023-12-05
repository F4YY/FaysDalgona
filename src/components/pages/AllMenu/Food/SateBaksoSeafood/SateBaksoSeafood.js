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
  SpicyImg,
  SpicyText,
  StarsReview,
  SubmitRating,
  Topping,
  YellowStars,
} from '../../../../styled/styled_menu';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faClose, faStar } from '@fortawesome/free-solid-svg-icons';
import { Alert, AlertDescription, AlertIcon, AlertTitle } from '@chakra-ui/react';

export const SateBaksoSeafood = ({
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
  setShowAlert
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

  const props = menudata.menu.find((menu) => menu.category === "Food" && menu.items[2].name === "Sate Bakso Seafood" && menu.items[2].list[0].name === "Sate Bakso Seafood");
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
            <StarsReview>
              <Rating>
                {props.items[2].list[0].stars}★
              </Rating>
              <text>
                {props.items[2].list[0].reviews}&nbsp;reviews
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
    {rateMenu && (
      <RatingStar>
        <FontAwesomeIcon
          className="close"
          icon={faClose}
          onClick={() => setRateMenu(false)}
        />
        <p>Tell others what you think.</p>
        <RatingMenuWrap>
          <RatingImg loading="lazy" src={require('../../../../images/SateBaksoSeafood.jpg')} alt="Sate Bakso Seafood" />
          <RatingItemName>{props.items[2].list[0].name}</RatingItemName>
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
        >
        </FeedbackArea>
        <SubmitRating
          onClick={handleSubmit}
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
