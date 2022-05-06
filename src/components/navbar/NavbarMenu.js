import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import RestaurantMenuIcon from "@material-ui/icons/RestaurantMenu";

export const NavbarMenu = [
  {
    text: "Beranda",
    icons: <HomeIcon />,
    path: "/",
  },
  {
    text: "Produk",

    icons: <RestaurantMenuIcon />,
    path: "/",
  },
  {
    text: "Transaksi",
    icons: <ShoppingCartIcon />,
    path: "/",
  },
];
