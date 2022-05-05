import { AppBar, Avatar, IconButton, Toolbar } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import React from "react";
import { TopbarStyle } from "./TopbarStyle";
import logo from "../../img/logo.png";

function Topbar({ funcsetMobile }) {
  const classes = TopbarStyle();
  return (
    <div>
      <AppBar position="fixed" elevation={1}>
        <Toolbar className={classes.topbar}>
          <IconButton className={classes.topbarcontent} onClick={funcsetMobile}>
            <Menu />
          </IconButton>
          <div className={classes.topbarcontent}>
            <Avatar
              variant="square"
              alt="Admin"
              src={logo}
              className={classes.topbarlogo}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Topbar;
