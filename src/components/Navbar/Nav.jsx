import React from "react";
import s from './Nav.module.css'
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
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
  )
}

export default Nav;