import React from "react";
import { Avatar, ListItem, ListItemText } from "@material-ui/core";
import logo from "../../img/logo.png";
import LeftbarStyle from "./LeftbarStyle";
import { LeftbarData } from "./LeftbarData";
import { useNavigate } from "react-router";

function LeftbarDesign() {
  const classes = LeftbarStyle();
  const navigate = useNavigate();

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
        <ListItem button key={item.id} onClick={() => navigate(item.path)}>
          <ListItem>{item.icon}</ListItem>
          <ListItemText>{item.title}</ListItemText>
        </ListItem>
      ))}
    </div>
  );
}

export default LeftbarDesign;
