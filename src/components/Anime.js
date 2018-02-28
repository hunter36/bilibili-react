import React , { Component } from 'react';
import '../styles/Anime.css';
import {
  Route,
  NavLink
} from 'react-router-dom';
import CommendAnime from './CommendAnime';
import SubAnime from './SubAnime';

class Anime extends Component {
	render(){
		return (
			<div className="anime">
				<div className="sub_link">
					<ul>
						<li><NavLink exact to="/main/anime/commendAnime" activeClassName="active">推荐</NavLink></li>
						<li><NavLink to="/main/anime/subAnime" activeClassName="active">MAD-AMV</NavLink></li>
						<li><NavLink to="/main/anime/h" activeClassName="active">MAD-AMV</NavLink></li>
						<li><NavLink to="/main/anime/x" activeClassName="active">MAD-AMV</NavLink></li>
						<li><NavLink to="/main/anime/y" activeClassName="active">MAD-AMV</NavLink></li>
					</ul>
				</div>
				<Route path="/main/anime/commendAnime" component={CommendAnime}/>
				<Route path="/main/anime/subAnime" component={SubAnime}/>
			</div>
		)
	}
}

export default Anime;