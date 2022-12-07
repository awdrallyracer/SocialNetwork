import React from "react";
import { Logo } from "../Image/Image";
import h from './Header.module.css';

const Header = () => {
    return (
        <header className={h.header}>
            <img src={Logo}></img>
        </header>
    )
}

export default Header;