import React from 'react';
import menudata from "../../../../database/menu.json";
import {
  BackButtontoMain,
  MenuCategory,
  MenuCategoryGroup,
  MenuItemGroup,
  MenuItemImage,
  MenuItemText
} from '../../../../styled/styled_menu';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

export const RegularHot = () => {
  const navigate = useNavigate();
  const handleClick = (anchor) => {
    navigate(anchor);
  };
  const regularHot = menudata.menu.find((menu) => menu.category === "Drinks" && menu.items[2].name === "Regular Hot");
  if (!regularHot) {
    return null;
  }
  return (
    <div>
      <MenuCategory id={`${regularHot.items[2].title}-section`}>
        {regularHot.items[2].name}
        <BackButtontoMain
          onClick={() => handleClick(`/AllMenu/MainMenu`)}
        >
          <FontAwesomeIcon icon={faChevronLeft} />&nbsp;Back
        </BackButtontoMain>
      </MenuCategory>
      <MenuCategoryGroup>
        {regularHot.items[2].list.map((item) => (
          <MenuItemGroup key={item.name}>
            <MenuItemImage
              loading="lazy"
              src={require(`../../../../images/${item.image}`)}
              alt={item.name}
              onClick={() => handleClick(`/${item.name}`)}
            />
            <MenuItemText
              onClick={() => handleClick(`/${item.name}`)}
            >
              {item.name}
            </MenuItemText>
          </MenuItemGroup>
        ))}
      </MenuCategoryGroup>
    </div>
  )
}
