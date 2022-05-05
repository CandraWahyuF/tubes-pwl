import { Home, ShoppingBasket, ShoppingCart } from "@material-ui/icons";
import React from "react";

export const LeftbarData = [
  {
    id: 1,
    title: "Beranda",
    path: "/",
    icon: <Home />,
  },
  {
    id: 2,
    title: "Produk",
    path: "/",
    icon: <ShoppingBasket />,
  },
  {
    id: 3,
    title: "Transaksi",
    path: "/",
    icon: <ShoppingCart />,
  },
];
