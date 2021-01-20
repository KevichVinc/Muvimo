import React from 'react';
import { Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profiles from './pages/Profiles/Profiles';
import Settings from './pages/Settings/Settings';
import Portfolio from './components/Portfolio/Portfolio';
import Feed from './components/Feed/Feed';

import style from './style.module.css';

export default function App() {
  return (
    <div className={style.appWrapper}>
      <Header />
      <Navbar />
      <div className={style.appContentWrapper}>
        <Route path="/profiles" render={() => <Profiles />} />
        <Route path="/settings" render={() => <Settings />} />
        <Route path="/portfolio" render={() => <Portfolio />} />
        <Route path="/feed" render={() => <Feed />} />
      </div>
    </div>
  );
}
