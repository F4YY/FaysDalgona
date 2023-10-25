import React from "react";
import menudata from "../../database/menu.json";
import {
  MenuCategory,
  MenuCategoryGroup,
  MenuItemGroup,
  MenuItemImage,
  MenuItemText,
} from "../../styled/AllMenu/StyledMenu";
import { useNavigate } from "react-router-dom";

export const MainMenu = ({scrollToTop}) => {
  const navigate = useNavigate();
  const handleClick = (anchor) => {
    navigate(anchor);
    scrollToTop();
  }
  return (
    <div>
    {menudata.map((menu) => (
      <>
        <MenuCategory>
          {menu.category}
        </MenuCategory>
        <MenuCategoryGroup>
          {menu.items.map((item) => (
          <MenuItemGroup key={item.name}>
            <MenuItemImage
              loading="lazy"
              src={require(`../../images/${item.imageUrl}`)}
              alt={item.name}
              onClick={() => handleClick('/AllMenu/' + item.name)}
            />
            <MenuItemText
              onClick={() => handleClick('/AllMenu/' + item.name)}
            >
              {item.name}
            </MenuItemText>
          </MenuItemGroup>
          ))}
        </MenuCategoryGroup>
      </>
    ))}
    </div>
  )
}
