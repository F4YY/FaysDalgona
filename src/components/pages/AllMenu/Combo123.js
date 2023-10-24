import React from 'react';
import menudata from "../../database/menu.json";
import { MenuCategory, MenuCategoryGroup, MenuItemGroup, MenuItemImage, MenuItemText } from '../../styled/AllMenu/StyledMenu';

export const Combo123 = () => {
      const combo123 = menudata.find((menu) => menu.category === "Combo" && menu.items[1].name === "Combo 123");
      if (!combo123) {
        return null;
      }
      return (
        <div>
          <MenuCategory id={`${combo123.items[1].title}-section`}>
            {combo123.items[1].name}
          </MenuCategory>
          <MenuCategoryGroup>
            {combo123.items[1].list.map((item) => (
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
