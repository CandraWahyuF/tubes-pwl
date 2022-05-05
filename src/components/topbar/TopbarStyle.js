import { makeStyles } from "@material-ui/core";

export const TopbarStyle = makeStyles((theme) => ({
  topbar: {
    [theme.breakpoints.up("sm")]: {
      marginLeft: "200px",
    },
    backgroundColor: "#311C82",
  },
  topbarlogo: {
    height: "60px",
    width: "70px",
  },
  topbarcontent: {
    color: "white",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
    float: "right",
  },
}));
