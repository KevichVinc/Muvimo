import React from 'react';
import { Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import Portfolio from './components/Portfolio/Portfolio';
import Feed from './components/Feed/Feed';

import style from './style.module.css';

export default function App() {
  return (
    <div className={style.appWrapper}>
      <Header />
      <Navbar />
      <div className={style.appContentWrapper}>
        <Route path="/profile" render={() => <Profile />} />
        <Route path="/settings" render={() => <Settings />} />
        <Route path="/portfolio" render={() => <Portfolio />} />
        <Route path="/feed" render={() => <Feed />} />
      </div>
    </div>
  );
}
