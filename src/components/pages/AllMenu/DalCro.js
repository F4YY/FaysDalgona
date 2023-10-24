import React from 'react';
import menudata from "../../database/menu.json";
import { MenuCategory, MenuCategoryGroup, MenuItemGroup, MenuItemImage, MenuItemText } from '../../styled/AllMenu/StyledMenu';

export const DalCro = () => {
      const dalCro = menudata.find((menu) => menu.category === "Combo" && menu.items[0].name === "Simple DalCro");
      if (!dalCro) {
        return null;
      }
      return (
        <div>
          <MenuCategory id={`${dalCro.items[0].title}-section`}>
            {dalCro.items[0].name}
          </MenuCategory>
          <MenuCategoryGroup>
            {dalCro.items[0].list.map((item) => (
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
