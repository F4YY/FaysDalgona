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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

export const Croffle = () => {
  const navigate = useNavigate();
  const handleClick = (anchor) => {
    navigate(anchor);
  };
  const croffle = menudata.menu.find((menu) => menu.category === "Food" && menu.items[1].name === "Croffle Original");
  if (!croffle) {
    return null;
  }
  return (
    <>
      <MenuCategory id={`${croffle.items[1].title}-section`}>
        {croffle.items[1].name}
        <BackButtontoMain
          onClick={() => handleClick(`/AllMenu/MainMenu`)}
        >
          <FontAwesomeIcon icon={faChevronLeft} />&nbsp;Back
        </BackButtontoMain>
      </MenuCategory>
      <MenuCategoryGroup>
        {croffle.items[1].list.map((item) => (
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
    </>
  )
}
