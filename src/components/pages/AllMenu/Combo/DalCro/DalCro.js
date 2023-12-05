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

export const DalCro = () => {
  const navigate = useNavigate();
  const handleClick = (anchor) => {
    navigate(anchor);
  };
  const dalCro = menudata.menu.find((menu) => menu.category === "Combo" && menu.items[0].name === "Simple DalCro");
  if (!dalCro) {
    return null;
  }
  return (
    <>
      <MenuCategory id={`${dalCro.items[0].title}-section`}>
        {dalCro.items[0].name}
        <BackButtontoMain
          onClick={() => handleClick(`/AllMenu/MainMenu`)}
        >
          <FontAwesomeIcon icon={faChevronLeft} />&nbsp;Back
        </BackButtontoMain>
      </MenuCategory>
      <MenuCategoryGroup>
        {dalCro.items[0].list.map((item) => (
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
