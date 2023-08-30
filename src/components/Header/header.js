import React, { useState } from 'react';
import classes from "./header.module.scss"
import Button from "../Button/button"

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
                    <a href='/'>page one</a>
                </li>
                <li>
                    <a href='/'>page two</a>
                </li>
                <li>
                    <a href='/'>page three</a>
                </li>
            </ul>
            
        </nav>
        </div>
    </header>
  )
}

export default Header