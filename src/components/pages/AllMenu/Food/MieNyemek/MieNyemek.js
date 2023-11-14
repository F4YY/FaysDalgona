import React from 'react';
import menudata from "../../../../database/menu.json";
import { MenuCategory, MenuCategoryGroup, MenuItemGroup, MenuItemImage, MenuItemText } from '../../../../styled/AllMenu/StyledMenu';

export const MieNyemek = () => {
      const mieNyemek = menudata.find((menu) => menu.category === "Food" && menu.items[0].name === "Mie Nyemek");
      if (!mieNyemek) {
        return null;
      }
      return (
        <>
          <MenuCategory id={`${mieNyemek.items[0].title}-section`}>
            {mieNyemek.items[0].name}
          </MenuCategory>
          <MenuCategoryGroup>
            {mieNyemek.items[0].list.map((item) => (
              <MenuItemGroup key={item.name}>
                <MenuItemImage loading="lazy" src={require(`../../../../images/${item.image}`)} alt={item.name} />
                <MenuItemText>
                  {item.name}
                </MenuItemText>
              </MenuItemGroup>
            ))}
          </MenuCategoryGroup>
        </>
      )
}
