import {
  AppBar,
  Avatar,
  Badge,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { NotificationsActive } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  Toolbar: {
    color: "red",
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "white",
  },
  logoLg: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoSm: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  icons: {
    display: "flex",
    alignItems: "center",
  },
  notif: {
    marginRight: theme.spacing(1),
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar>
      <Toolbar className={classes.Toolbar}>
        <Typography variant="h6" className={classes.logoLg}>
          WAROENG MAKAN
        </Typography>
        <Typography variant="h6" className={classes.logoSm}>
          WAMA
        </Typography>
        <div className={classes.icons}>
          <IconButton className={classes.notif}>
            <Badge badgeContent={1} color="secondary">
              <NotificationsActive />
            </Badge>
          </IconButton>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
