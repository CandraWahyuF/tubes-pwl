import { Drawer, Hidden } from "@material-ui/core";
import React from "react";
import { LeftbarStyle } from "./LeftbarStyle";
import LeftbarDesign from "./LeftbarDesign";

function Leftbar({ isMobile, funcsetMobile }) {
  const classes = LeftbarStyle();
  return (
    <div>
      <nav className={classes.drawer}>
        <Hidden xsDown implementation="css">
          <Drawer
            variant="permanent"
            open
            anchor="left"
            classes={{ paper: classes.drawerpaper }}
          >
            <LeftbarDesign />
          </Drawer>
        </Hidden>
        <Drawer
          variant="temporary"
          open={isMobile}
          anchor="left"
          classes={{ paper: classes.drawerpaper }}
          onClick={funcsetMobile}
        >
          <LeftbarDesign />
        </Drawer>
      </nav>
    </div>
  );
}

export default Leftbar;
