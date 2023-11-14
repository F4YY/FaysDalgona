import React from 'react';
import menudata from "../../../../database/menu.json";
import { BackButtontoMain, MenuCategory, MenuCategoryGroup, MenuItemGroup, MenuItemImage, MenuItemText } from '../../../../styled/AllMenu/StyledMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

export const RegularIced = () => {
  const navigate = useNavigate();
  const handleClick = (anchor) => {
    navigate(anchor);
  };
  const regularIced = menudata.find((menu) => menu.category === "Drinks" && menu.items[1].name === "Regular Iced");
  if (!regularIced) {
    return null;
  }
  return (
    <div>
      <MenuCategory id={`${regularIced.items[1].title}-section`}>
        {regularIced.items[1].name}
        <BackButtontoMain
          onClick={() => handleClick(`/AllMenu/MainMenu`)}
        >
          <FontAwesomeIcon icon={faChevronLeft} />&nbsp;Back
        </BackButtontoMain>
      </MenuCategory>
      <MenuCategoryGroup>
        {regularIced.items[1].list.map((item) => (
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
