import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { BottomRow, MenuDescription, NameAndPrice, OrderDelivery, TopMenuDesc } from "../styled/styled_highlight";

const TopMenu = ({ title, price, subtitle, desc }) => {
    return (
    <TopMenuDesc>
      <NameAndPrice>
        <h3>
          {title}
        </h3>
        <h4>
          {price}
        </h4>
      </NameAndPrice>
      <MenuDescription>
        {desc}
      </MenuDescription>
      <BottomRow>
        <OrderDelivery>
          {subtitle}
        </OrderDelivery>
          <FontAwesomeIcon icon={faCar} size="1x" />
      </BottomRow>
    </TopMenuDesc>
  )
}

export default TopMenu;