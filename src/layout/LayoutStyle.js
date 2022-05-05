import { makeStyles } from "@material-ui/core";
import React from "react";

export const LayoutStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  topbarWidth: theme.mixins.toolbar,
}));
