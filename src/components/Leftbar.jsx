import { Avatar, Container, makeStyles, Typography } from "@material-ui/core";
import { Home, ShoppingBasket, ShoppingCart } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    color: "white",
    paddingTop: theme.spacing(10),
    backgroundColor: "#311C82",
  },
  items: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(2),
      cursor: "pointer",
    },
  },
  text: {
    fontWeight: 500,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  icons: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      fontSize: "18px",
    },
  },
}));

const Leftbar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      {/* <img
        alt="WM"
        src="https://img2.pngdownload.id/20180413/oyq/kisspng-restaurant-logo-lunch-5ad1606381cc10.5146934915236711395317.jpg"
        sx={{ width: 50, height: 50 }}
      /> */}
      <div className={classes.items}>
        <Home className={classes.icons} />
        <Typography className={classes.text}>Beranda</Typography>
      </div>
      <div className={classes.items}>
        <ShoppingCart className={classes.icons} />
        <Typography className={classes.text}>Transaksi</Typography>
      </div>
      <div className={classes.items}>
        <ShoppingBasket className={classes.icons} />
        <Typography className={classes.text}>Produk</Typography>
      </div>
    </Container>
  );
};

export default Leftbar;
