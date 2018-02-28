import React, { Component } from 'react';
import '../../styles/MainPage.css';
import Header from '../common/Header';
import {
  Route,
  NavLink,
  Redirect
} from 'react-router-dom';
import Main from '../Main';
import { Icon } from 'antd-mobile';
import Anime from '../Anime';

class MainPage extends Component {
  render() {
    return (
        <div className="MainPage">
          <Header />
          <div className="index">
            <ul>
              <li><NavLink to="/main/index" activeClassName="active">首页</NavLink></li>
              <li><NavLink to="/main/anime" activeClassName="active">动画</NavLink></li>
              <li><NavLink to="/main/h" activeClassName="active">番剧</NavLink></li>
              <li><NavLink to="/main/x" activeClassName="active">国创</NavLink></li>
              <li><NavLink to="/main/y" activeClassName="active">音乐</NavLink></li>
              <li>
                <Icon type="down" size="ig" color="#aaa" />
              </li>
            </ul>
          </div>
          <Route path="/main/index" component={Main} />
          <Route path="/main/anime" component={Anime} />
          <Route exact path="/main/anime" render={()=><Redirect to="/main/anime/CommendAnime"/>}/>
        </div>
    );
  }
}

export default MainPage;
