import React from "react";
import menudata from "../../database/menu.json";
import {
  MenuCategory,
  MenuCategoryGroup,
  MenuItemGroup,
  MenuItemImage,
  MenuItemText,
} from "../../styled/AllMenu/StyledMenu";

export const DalgonaIced = () => {
  const dalgonaIced = menudata.find((menu) => menu.category === "Drinks" && menu.items[0].name === "Dalgona Iced");
  if (!dalgonaIced) {
    return null;
  }
  return (
    <>
      <MenuCategory id={`${dalgonaIced.items[0].title}-section`}>
        {dalgonaIced.items[0].name}
      </MenuCategory>
      <MenuCategoryGroup>
        {dalgonaIced.items[0].list.map((item) => (
          <MenuItemGroup key={item.name}>
            <MenuItemImage src={require(`../../images/${item.image}`)} alt={item.name} />
            <MenuItemText>
              {item.name}
            </MenuItemText>
          </MenuItemGroup>
        ))}
      </MenuCategoryGroup>
    </>
  )
}
