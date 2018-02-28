import React,{Component} from 'react';
import Header from '../common/Header';
import '../../styles/Space.css';
import {
  Route,
  NavLink
} from 'react-router-dom';
import History from '../cases/History';
import Contribute from '../cases/Contribute';

class Space extends Component {
	render(){
		return (
			<div className="space">
				<Header />
				<div className="banner">
					<img src="https://s1.hdslb.com/bfs/static/mult/images/bannerTop.png" alt="banner"/>
					<div className="sign">
						<div className="sign_button login">
							<NavLink to="/login">登录</NavLink>
						</div>
						<div className="sign_button register">
							<NavLink to="/register">注册</NavLink>
						</div>
					</div>
				</div>
				<div className="space_tab">
					<NavLink to="/space/history" activeClassName="cur"><p>历史记录<span></span></p></NavLink>
					<NavLink to="/space/contribute" activeClassName="cur"><p>我的投稿<span></span></p></NavLink>
				</div>
				<Route path="/space/history" component={History} />
				<Route path="/space/contribute" component={Contribute} />
			</div>
		)
	}
}

export default Space; 