import React from 'react';
import 'element-theme-default';
import { Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profiles from './pages/Profiles/Profiles';
import Settings from './pages/Settings/Settings';
import Portfolio from './components/Portfolio/Portfolio';
import Feed from './components/Feed/Feed';
import NewProfile from './pages/NewProfile/NewProfile';
import EditProfile from './pages/EditProfile/EditProfile';
import Profile from './pages/Profile/Profile';
import GlobalSearch from './pages/GlobalSearch/GlobalSearch';

import style from './style.module.css';

export default function App() {
  return (
    <div className={style.appWrapper}>
      <Header />
      <Navbar />
      <div className={style.appContentWrapper}>
        <Route exact path="/profiles" render={() => <Profiles />} />
        <Route path="/settings" render={() => <Settings />} />
        <Route path="/portfolio" render={() => <Portfolio />} />
        <Route path="/feed" render={() => <Feed />} />
        <Route path="/newprofile" render={() => <NewProfile />} />
        <Route path="/editprofile" render={() => <EditProfile />} />
        <Route exact path="/find" render={() => <GlobalSearch />} />
        <Route
          exact
          path="/find/:firstName"
          render={() => <GlobalSearch />}
        />
        <Route exact path="/profile/:id" render={() => <Profile />} />
      </div>
    </div>
  );
}
