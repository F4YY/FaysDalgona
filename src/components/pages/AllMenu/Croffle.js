import React from 'react';
import menudata from "../../database/menu.json";
import { MenuCategory, MenuCategoryGroup, MenuItemGroup, MenuItemImage, MenuItemText } from '../../styled/AllMenu/StyledMenu';

export const Croffle = () => {
      const croffle = menudata.find((menu) => menu.category === "Food" && menu.items[1].name === "Croffle Original");
      if (!croffle) {
        return null;
      }
      return (
        <>
          <MenuCategory id={`${croffle.items[1].title}-section`}>
            {croffle.items[1].name}
          </MenuCategory>
          <MenuCategoryGroup>
            {croffle.items[1].list.map((item) => (
              <MenuItemGroup key={item.name}>
                <MenuItemImage loading="lazy" src={require(`../../images/${item.image}`)} alt={item.name} />
                <MenuItemText>
                  {item.name}
                </MenuItemText>
              </MenuItemGroup>
            ))}
          </MenuCategoryGroup>
        </>
      )
}
