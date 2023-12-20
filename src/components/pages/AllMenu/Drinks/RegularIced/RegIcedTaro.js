import React from 'react';
import menudata from "../../../../database/menu.json";
import {
  AlertCloseButton,
  AlertWrapper,
  BackButton,
  ButtonOrder,
  Calory,
  CategoryText,
  DetailDesc,
  DrinkText,
  ErrorAlert,
  FeedbackArea,
  Img,
  ItemName,
  ItemText,
  MenuText,
  NotifAlert,
  OrderNowText,
  Path,
  PathAndBackButton,
  ProductDesc,
  ProductDetail,
  ProductHero,
  ProductInfoOrder,
  Rating,
  RatingCloseButton,
  RatingImg,
  RatingItemName,
  RatingMenuWrap,
  RatingStar,
  RatingWrap,
  SizeAndOrder,
  SizeDesc,
  SizeText,
  Slash,
  StarIcon,
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
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { AlertDescription, AlertIcon, AlertTitle, HStack } from '@chakra-ui/react';

export const RegIcedTaro = ({
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
  showNotif,
  setShowNotif,
  setShowAlert,
  isSubmitting,
  feedbackValue,
  setFeedbackValue,
  setMenuPic,
  setMenuName,
  user
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

  const [isClickable, setIsClickable] = React.useState(true);
  const [feedbackTouched, setFeedbackTouched] = React.useState(false);

  React.useEffect(() => {
    scrollToTop();
    if (showNotif) {
      const timer = setTimeout(() => {
        setShowNotif(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
    fetch("https://fays-dalgona.onrender.com/Testimonials")
    .then(response => response.json())
    .then(data => {
      const matchingObject = data.find(obj => obj.name === user?.user_metadata.full_name && obj.menu_name === "Taro Iced");
      if (matchingObject) {
        setIsClickable(false);
        console.log(user?.user_metadata.full_name);
      } else {
        setIsClickable(true);
      }
    })
    .catch(error => {
      console.error("Error fetching Testimonials:", error);
    });
  }, [showNotif, setShowNotif, user?.user_metadata.full_name]);
  const props = menudata.menu.find((menu) => menu.category === "Drinks" && menu.items[1].name === "Regular Iced" && menu.items[1].list[7].name === "Taro Iced");

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
            onClick={() => handleClick(`/AllMenu/${props.items[1].name}`)}
          >{props.items[1].name}</CategoryText>
          <Slash>/</Slash>
          <ItemText>{props.items[1].list[7].name}</ItemText>
        </Path>
        <BackButton
          onClick={() => handleClick(`/AllMenu/${props.items[1].name}`)}
        >
          <FontAwesomeIcon icon={faChevronLeft} />&nbsp;Back
        </BackButton>
      </PathAndBackButton>
      <ProductHero background={props.items[1].background}>
        <Img loading="lazy" src={require(`../../../../images/${props.items[1].list[7].image}`)} alt={props.items[1].list[7].name} />
        <ProductDesc>
          <ItemName>{props.items[1].list[7].name}</ItemName>
          <RatingWrap>
            <StarsReview>
              <Rating>
                {props.items[1].list[7].stars}★
              </Rating>
              <text>
                {props.items[1].list[7].reviews}&nbsp;reviews
              </text>
            </StarsReview>
            {authReady && (
              <h2
                onClick={handleRateMenu}
                style={!isClickable ? { pointerEvents: 'none', opacity: 0.5 } : null}
              >
                Rate this menu
              </h2>
            )}
          </RatingWrap>
          <DetailDesc>{props.items[1].list[7].description}</DetailDesc>
          <Calory>{props.items[1].list[7].calories}</Calory>
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
        <RatingCloseButton
          onClick={() => {
            setRateMenu(false);
            setCurrentRating(0);
            setFeedbackValue('');
          }}
        />
        <p>Tell others what you think.</p>
        <RatingMenuWrap>
          <RatingImg loading="lazy" src={require('../../../../images/ReguIced_Taro.jpg')} alt='regu iced taro' />
          <RatingItemName>{props.items[1].list[7].name}</RatingItemName>
        </RatingMenuWrap>
        <YellowStars>
          {stars.map((_, index) => {
            return (
              <StarIcon
                key={index}
                color={(hoverRating || currentRating) > index ? "#ffc107" : "#C7C8B9"}
                onClick={() => {
                  setCurrentRating(index + 1)
                  setMenuPic('ReguIced_Taro.jpg');
                  setMenuName(props.items[1].list[7].name);
                }}
                onMouseEnter={() => setHoverRating(index + 1)}
                onMouseLeave={() => setHoverRating(undefined)}
              />
            );
          })}
        </YellowStars>
        <FeedbackArea
          value={feedbackValue}
          onChange={(event) => setFeedbackValue(event.target.value)}
          onBlur={() => setFeedbackTouched(true)}
          isrequired={feedbackTouched}
        >
        </FeedbackArea>
        <HStack justify="flex-end">
          {(currentRating === 0 && feedbackTouched) && (
            <i
              style={{ display: "block", color: "red", fontSize: ".8rem", textAlign: "right", marginTop: ".15rem" }}
            >
              Please give star rating
            </i>
          )}
          {(feedbackValue.length < 1 && feedbackTouched) && (
            <i
              style={{ display: "block", color: "red", fontSize: ".8rem", textAlign: "right", marginTop: ".15rem" }}
            >
              Please give review
            </i>
          )}
        </HStack>
        <SubmitRating
          disabled={currentRating === 0 || feedbackValue.length <= 1}
          onClick={handleSubmit}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </SubmitRating>
      </RatingStar>
    )}
    {showAlert && (
      <ErrorAlert>
        <AlertWrapper>
          <AlertCloseButton
            onClick={() => setShowAlert(false)}
          />
        </AlertWrapper>
        <AlertIcon />
        <AlertTitle>You're not logged in!</AlertTitle>
        <AlertDescription>Please login to rate a menu.</AlertDescription>
      </ErrorAlert>
    )}
    {showNotif && (
      <NotifAlert>
        <HStack m={2}>
          <AlertIcon />
          <AlertTitle>Thank you!</AlertTitle>
        </HStack>
        <AlertDescription>Your review has been submitted.</AlertDescription>
      </NotifAlert>
    )}
    </>
  )
}
