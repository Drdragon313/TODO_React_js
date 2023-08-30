import React from 'react';
import classes from "./header.module.scss"
import Button from "../Button/button"
import { Link } from 'react-router-dom';
const Header = () => {

  return (
    <header className={classes.header}>
        <div className={classes.header__content}>
            <h2 className={classes.header__content__logo}>
                TODO APP
            </h2>
        <nav className={classes.header__content__nav}>
            <ul>
                <li>
                    <Link to={'/home'}>Home</Link>
                </li>
                <li>
                    <Link to={'/profile'}>Profile</Link>
                </li>
                <li>
                    <Link to={'/'}><Button text="Sign Out"></Button></Link>
                </li>
               
            </ul>
            
        </nav>
        </div>
    </header>
  )
}

export default Header