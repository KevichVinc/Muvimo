import React from 'react';
import { NavLink } from 'react-router-dom';
import settingsPNG from '../../assets/icons/settings.png';
import folderPNG from '../../assets/icons/folder.png';
import avatarPNG from '../../assets/icons/avatar.png';
import tagPNG from '../../assets/icons/tag.png';
import editPNG from '../../assets/icons/edit.png';
import searchPNG from '../../assets/icons/search.png';
import style from './Navbar.module.css';

export default function Navbar() {
  return (
    <div className={style.main}>
      <nav className={style.nav}>
        <div className={style.item}>
          <NavLink
            to="/profiles"
            className={style.textMenu}
            activeClassName={style.active}
          >
            Profiles
          </NavLink>
        </div>
        <div className={style.item}>
          <NavLink
            to="/settings"
            className={style.textMenu}
            activeClassName={style.active}
          >
            Settings
          </NavLink>
        </div>
        <div className={style.item}>
          <NavLink
            to="/portfolio"
            className={style.textMenu}
            activeClassName={style.active}
          >
            Portfolio
          </NavLink>
        </div>
        <div className={style.item}>
          <NavLink
            to="/feed"
            className={style.textMenu}
            activeClassName={style.active}
          >
            Feed
          </NavLink>
        </div>
        <div className={style.item}>
          <NavLink
            to="/newprofile"
            className={style.textMenu}
            activeClassName={style.active}
          >
            Create Profile
          </NavLink>
        </div>
        <div className={style.item}>
          <NavLink
            to="/find?firstName="
            className={style.textMenu}
            activeClassName={style.active}
          >
            Search
          </NavLink>
        </div>
      </nav>
      <nav className={style.navMini}>
        <div className={style.item}>
          <NavLink to="/profiles" activeClassName={style.active}>
            <img
              className={style.iconMenu}
              src={avatarPNG}
              alt="profiles"
            />
          </NavLink>
        </div>
        <div className={style.item}>
          <NavLink to="/settings" activeClassName={style.active}>
            <img
              className={style.iconMenu}
              src={settingsPNG}
              alt="settings"
            />
          </NavLink>
        </div>
        <div className={style.item}>
          <NavLink to="/portfolio" activeClassName={style.active}>
            <img
              className={style.iconMenu}
              src={folderPNG}
              alt="portfolio"
            />
          </NavLink>
        </div>
        <div className={style.item}>
          <NavLink to="/feed" activeClassName={style.active}>
            <img className={style.iconMenu} src={tagPNG} alt="feed" />
          </NavLink>
        </div>
        <div className={style.item}>
          <NavLink to="/newprofile" activeClassName={style.active}>
            <img
              className={style.iconMenu}
              src={editPNG}
              alt="newprofile"
            />
          </NavLink>
        </div>
        <div className={style.item}>
          <NavLink
            to="/find?firstName="
            activeClassName={style.active}
          >
            <img
              className={style.iconMenu}
              src={searchPNG}
              alt="global search"
            />
          </NavLink>
        </div>
      </nav>
    </div>
  );
}
