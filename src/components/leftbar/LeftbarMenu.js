import React from "react";
import { Avatar, ListItem, ListItemText } from "@material-ui/core";
import logo from "../../img/logo.png";
import LeftbarStyle from "./LeftbarStyle";
import { LeftbarData } from "./LeftbarData";
import { useNavigate, useLocation } from "react-router";

function LeftbarMenu() {
  const classes = LeftbarStyle();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div>
      <div className={classes.logoleft}>
        <Avatar
          alt="logo"
          src={logo}
          variant="square"
          className={classes.logoStyle}
        />
      </div>
      {LeftbarData.map((item) => (
        <ListItem
          button
          key={item.id}
          onClick={() => navigate(item.path)}
          className={
            location.pathname === item.path ? classes.active : classes.nonActive
          }
        >
          <ListItem>{item.icon}</ListItem>
          <ListItemText>{item.title}</ListItemText>
        </ListItem>
      ))}
    </div>
  );
}

export default LeftbarMenu;
