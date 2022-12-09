import React from "react";
import s from './Nav.module.css'
import { NavLink } from "react-router-dom";
import Friends from "./Friends/Friends";

const Nav = () => {
  return (
    <div>
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" className={({ isActive }) => isActive ? s.activeLink : undefined}>Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/dialogs" className={({ isActive }) => isActive ? s.activeLink : undefined}>Messages</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/news" className={({ isActive }) => isActive ? s.activeLink : undefined}>News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/music" className={({ isActive }) => isActive ? s.activeLink : undefined}>Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="settings" className={({ isActive }) => isActive ? s.activeLink : undefined}>Settings</NavLink>
      </div>
    </nav>
      <div className={s.friends}>
          <Friends />
      </div>
    </div>
  )
}

export default Nav;