import React from "react";
import { Grid } from "@material-ui/core";
import Leftbar from "../components/Leftbar";
import Navbar from "../components/Navbar";
import Konten from "../components/Konten";

const Beranda = () => {
  return (
    <div>
      <Navbar />

      <Grid containter>
        <Grid sm={2}>
          <Leftbar />
        </Grid>
        <Grid sm={10}>
          <Konten />
        </Grid>
      </Grid>
    </div>
  );
};

export default Beranda;
