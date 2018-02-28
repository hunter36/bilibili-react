import React, { Component } from 'react';
import { Button, WhiteSpace, Icon } from 'antd-mobile';
import '../../styles/Header.css';
import {
  withRouter,
  NavLink
} from 'react-router-dom';

class Header extends Component {
    render() {
	    return (
		    <div className="header">
		      	<div className="logo">
		      		<NavLink to="/main">
			      		<div>
			      			<img src="https://s1.hdslb.com/bfs/static/mult/images/logo.png" alt="logo"/>
			      		</div>
		      		</NavLink>
		      	</div>
		      	<div className="links">
		      		<NavLink to="/search">
		      			<Icon type="search" size="md" color="#aaa" />
		      		</NavLink>
		      		<NavLink to="/space">
			      		<div className="profile_photo">
			      			<img src="https://i2.hdslb.com/bfs/face/25c6fc9fe4d6f7534c79ef965338e69e72964b7e.jpg@53w_53h.webp" alt="img" />
			      		</div>
		      		</NavLink>
		      		<Button type="primary" className="download">下载APP</Button><WhiteSpace />
		      	</div>
		      	
		    </div>
	    );
    }

}

export default withRouter(Header);
