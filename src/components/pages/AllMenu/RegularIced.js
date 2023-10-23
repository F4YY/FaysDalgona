import React from 'react';
import menudata from "../../database/menu.json";
import { MenuCategory, MenuCategoryGroup, MenuItemGroup, MenuItemImage, MenuItemText } from '../../styled/AllMenu/StyledMenu';

export const RegularIced = () => {
      const regularIced = menudata.find((menu) => menu.category === "Drinks" && menu.items[1].name === "Regular Iced");
      if (!regularIced) {
        return null;
      }
      return (
        <div>
          <MenuCategory id={`${regularIced.items[1].title}-section`}>
            {regularIced.items[1].name}
          </MenuCategory>
          <MenuCategoryGroup>
            {regularIced.items[1].list.map((item) => (
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
