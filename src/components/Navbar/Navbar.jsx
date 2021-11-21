import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div className={`${classes.item} ${classes.active}`}>
        <NavLink to="/profile" activeClassName={classes.active}>
          Profile
        </NavLink>
      </div>
      <div className={`${classes.item} ${classes.active}`}>
        <NavLink to="/dialogs" activeClassName={classes.active}>
          Messages
        </NavLink>
      </div>
      <div className={`${classes.item} ${classes.active}`}>
        <NavLink to="/users" activeClassName={classes.active}>
          Users
        </NavLink>
      </div>
      {/* <div className={classes.item}>
        <NavLink to="">News</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="">Music</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="">Settings</NavLink>
      </div> */}
    </nav>
  );
};

export default Navbar;
