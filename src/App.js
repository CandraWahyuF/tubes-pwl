import { Grid, makeStyles } from "@material-ui/core";
import Leftbar from "./components/Leftbar";
import Navbar from "./components/Navbar";
import Konten from "./components/Konten";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Beranda from "./pages/Beranda";
import Transaksi from "./pages/Transaksi";
import Produk from "./pages/Produk";
import React from "react";

const useStyles = makeStyles((theme) => ({}));

function App() {
  const classes = useStyles();

  return (
    <div>
      {/* <Router>
        <Routes>
          <Route exact path="/Beranda" render={() => <Beranda />} />
          <Route path="/Transaksi" render={() => <Transaksi />} />
          <Route path="/Produk" render={() => <Produk />} />
        </Routes>
      </Router> */}

      <Navbar />
      <Grid container>
        <Grid sm={2}>
          <Leftbar />
        </Grid>
        <Grid sm={10}>
          <Konten />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
