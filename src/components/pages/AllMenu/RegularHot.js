import React from 'react';
import menudata from "../../database/menu.json";
import { MenuCategory, MenuCategoryGroup, MenuItemGroup, MenuItemImage, MenuItemText } from '../../styled/AllMenu/StyledMenu';

export const RegularHot = () => {
      const regularHot = menudata.find((menu) => menu.category === "Drinks" && menu.items[2].name === "Regular Hot");
      if (!regularHot) {
        return null;
      }
      return (
        <div>
          <MenuCategory id={`${regularHot.items[2].title}-section`}>
            {regularHot.items[2].name}
          </MenuCategory>
          <MenuCategoryGroup>
            {regularHot.items[2].list.map((item) => (
              <MenuItemGroup key={item.name}>
                <MenuItemImage loading="lazy" src={require(`../../images/${item.image}`)} alt={item.name} />
                <MenuItemText>
                  {item.name}
                </MenuItemText>
              </MenuItemGroup>
            ))}
          </MenuCategoryGroup>
        </div>
      )
}
