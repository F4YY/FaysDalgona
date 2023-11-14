import React from 'react';
import menudata from "../../../../database/menu.json";
import { MenuCategory, MenuCategoryGroup, MenuItemGroup, MenuItemImage, MenuItemText } from '../../../../styled/AllMenu/StyledMenu';

export const SateSeafood = () => {
      const sateSeafood = menudata.find((menu) => menu.category === "Food" && menu.items[2].name === "Sate Bakso Seafood");
      if (!sateSeafood) {
        return null;
      }
      return (
        <>
          <MenuCategory id={`${sateSeafood.items[2].title}-section`}>
            {sateSeafood.items[2].name}
          </MenuCategory>
          <MenuCategoryGroup>
            {sateSeafood.items[2].list.map((item) => (
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
