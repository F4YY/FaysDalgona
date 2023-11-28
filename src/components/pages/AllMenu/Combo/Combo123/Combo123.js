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

export const Combo123 = () => {
  const navigate = useNavigate();
  const handleClick = (anchor) => {
    navigate(anchor);
  };
  const combo123 = menudata.find((menu) => menu.category === "Combo" && menu.items[1].name === "Combo 123");
  if (!combo123) {
    return null;
  }
  return (
    <>
      <MenuCategory id={`${combo123.items[1].title}-section`}>
        {combo123.items[1].name}
        <BackButtontoMain
          onClick={() => handleClick(`/AllMenu/MainMenu`)}
        >
          <FontAwesomeIcon icon={faChevronLeft} />&nbsp;Back
        </BackButtontoMain>
      </MenuCategory>
      <MenuCategoryGroup>
        {combo123.items[1].list.map((item) => (
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
