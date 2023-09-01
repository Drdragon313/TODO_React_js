import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./header.module.scss";
import Button from "../Button/button";
import { Link } from "react-router-dom";
import { setUser, logout } from "../../Features/loginSlice/authSlice";
import Label from "../Labels/label";
const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      dispatch(setUser(storedUser));
    }
  }, [dispatch]);

  const isAuthenticated = user !== null;

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        <h2 className={classes.header__content__logo}>TODO APP</h2>
        <nav className={classes.header__content__nav}>
          <ul>
            {isAuthenticated ? (
              <>
                <li>
                  <h2 className={classes.header__content__logo}>
                    {user.username}
                  </h2>
                </li>
                <li>
                  <Link to={"/home"}>Home</Link>
                </li>
                <li>
                  <Link to={"/profile"}>Profile</Link>
                </li>
                <li>
                  <Link to={"/"}>
                    <Button text="Sign Out" onClick={handleLogout}></Button>
                  </Link>
                </li>
              </>
            ) : (
              <Label className="owner" text="Made by Muhammad Ahmed"></Label>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
