import * as React from "react";
import { NavLink, NavList } from "../../styled/AllMenu/StyledNavbar";

export default function NavigationBar() {
  return (
    <NavList>
      <NavLink href="...">Menu</NavLink>
      <NavLink href="...">Featured</NavLink>
      <NavLink href="...">Previous</NavLink>
      <NavLink href="...">Favorites</NavLink>
    </NavList>
  );
}