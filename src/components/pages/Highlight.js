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

const Highlight = () => {
  const scrollRef = React.useRef(null);
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
          <StyledImage src={DalgChocSilv} alt="DalgChocSilv" />
          <TopMenu
            title="Dalgona Choco Silverqueen"
            subtitle="Order a delivery"
            desc='Minuman Dalgona rasa cokelat silverqueen iced susu full cream dipadu dengan brown sugar dan boba.'
            price="Rp16.000/cup"
          />
        </SpecialItem>
        <SpecialItem>
          <StyledImage src={FD_Croffle} alt="Croffle" />
          <TopMenu
            title='Croffle Original'
            subtitle="Order a delivery"
            desc='Croissant waffle baked dengan butter margarine, taburan gula aren dan gula pasir.'
            price="Rp8000/pcs"
          />
        </SpecialItem>
        <SpecialItem>
          <StyledImage src={require('../images/mienyemek_baksoseafood.jpg')} alt="Mie Nyemek Bakso Seafood" />
          <TopMenu
            title='Mie Nyemek Bakso Seafood'
            subtitle="Order a delivery"
            desc='Indonesian tasty noodles mixed with vegetables, chicken egg, seafood meatballs.'
            price="Rp15000/bowl"
          />
        </SpecialItem>
      </SpecialMenu>
    </HighlightContainer>
  );
}

  export default Highlight;