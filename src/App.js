import { makeStyles } from "@material-ui/core";
import Beranda from "./pages/Beranda";
import Transaksi from "./pages/Transaksi";
import Produk from "./pages/Produk";
import React from "react";
import { Route, Routes } from "react-router";

const useStyles = makeStyles((theme) => ({}));

function App() {
  const classes = useStyles();

  return (
    <div>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/Produk" element={<Produk />} />
        <Route path="/Transaksi" element={<Transaksi />} />
      </Routes>
    </div>
  );
}

export default App;
