import React from "react";
import menudata from "../../database/menu.json";
import {
  MenuCategory,
  MenuCategoryGroup,
  MenuItemGroup,
  MenuItemImage,
  MenuItemText,
} from "../../styled/styled_menu";
import { useNavigate } from "react-router-dom";

export const MainMenu = ({scrollToTop}) => {
  const navigate = useNavigate();
  const handleClick = (anchor) => {
    navigate(anchor);
    scrollToTop();
  }
  return (
    <div>
      {menudata.menu.map((menu, menuIndex) => (
        <React.Fragment key={menuIndex}>
          <MenuCategory>{menu.category}</MenuCategory>
          <MenuCategoryGroup>
            {menu.items.map((item, itemIndex) => (
              <MenuItemGroup key={itemIndex}>
                <MenuItemImage
                  loading="lazy"
                  src={require(`../../images/${item.imageUrl}`)}
                  alt={item.name}
                  onClick={() => handleClick('/AllMenu/' + item.name)}
                />
                <MenuItemText onClick={() => handleClick('/AllMenu/' + item.name)}>
                  {item.name}
                </MenuItemText>
              </MenuItemGroup>
            ))}
          </MenuCategoryGroup>
        </React.Fragment>
      ))}
    </div>
  )
}
