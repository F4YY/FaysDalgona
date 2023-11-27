import React from 'react';
import DalgChocSilv from '../images/Dalg_ChocSilv.jpg';
import FD_Croffle from "../images/FD_Croffle.jpg";
import TopMenu from './TopMenu';
import {
  HighlightContainer,
  HighlightHeading,
  OrderButton,
  SpecialItem,
  SpecialMenu,
  StyledImage,
  ThisWeekandOrder
} from '../styled/styled_highlight';
import { useNavigate } from 'react-router-dom';

const Highlight = () => {
  const scrollRef = React.useRef(null);
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
    <HighlightContainer>
      <ThisWeekandOrder>
        <HighlightHeading id="Menu-section">
            This Weeks Specials!
        </HighlightHeading>
        <OrderButton variant="outline" color="yellow" fontWeight="bold" _hover={{ color: "azure", border: "2px solid azure" }} href="https://gofood.link/a/yHFDprE" target="_blank" rel="noreferrer">
          Order Online
        </OrderButton>
      </ThisWeekandOrder>
      <SpecialMenu ref={scrollRef}>
        <SpecialItem>
          <StyledImage
            src={DalgChocSilv}
            alt="DalgChocSilv"
            onClick={() => handleClick(`/Dalgona Choco Silverqueen`)}
          />
          <TopMenu
            title="Dalgona Choco Silverqueen"
            subtitle="Order a delivery"
            desc='Dalgona drink with chocolate SilverQueen flavor mixed with brown sugar and boba pearl.'
            price="IDR 15999"
          />
        </SpecialItem>
        <SpecialItem>
          <StyledImage
            src={FD_Croffle}
            alt="Croffle"
            onClick={() => handleClick(`/Croffle Original`)}
          />
          <TopMenu
            title='Croffle Original'
            subtitle="Order a delivery"
            desc='A delightful fusion of croissants and waffles, created by cooking croissant dough in a waffle iron.'
            price="IDR 10999"
          />
        </SpecialItem>
        <SpecialItem>
          <StyledImage
            src={require('../images/mienyemek_baksoseafood.jpg')}
            alt="Mie Nyemek Bakso Seafood"
            onClick={() => handleClick(`/Mie Nyemek Bakso Seafood`)}
          />
          <TopMenu
            title='Mie Nyemek Bakso Seafood'
            subtitle="Order a delivery"
            desc='Indonesian tasty noodles mixed with vegetables, chicken egg, seafood meatballs.'
            price="IDR 17999"
          />
        </SpecialItem>
      </SpecialMenu>
    </HighlightContainer>
  );
}

  export default Highlight;