import { makeStyles } from "@material-ui/core";

export const LeftbarStyle = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: "200px",
    },
  },
  drawerpaper: {
    width: "200px",
    color: "white",
    backgroundColor: "#311C82",
  },
  logoleft: {
    borderBottom: "1px solid #004d40",
    padding: theme.spacing(0),
  },
  logoStyle: {
    width: theme.spacing(25),
    height: theme.spacing(25),
  },
}));

export default LeftbarStyle;
