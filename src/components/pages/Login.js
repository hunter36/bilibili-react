import React ,{Component} from 'react';
import '../../styles/cases/LoginHead.css';
import '../../styles/cases/LoginAndRegister.css';
import { Button, WhiteSpace } from 'antd-mobile';

class Login extends Component {
	constructor(props){
		super(props);

		this.gotoRegister = this.gotoRegister.bind(this);
	}
	gotoRegister(){
		this.props.history.push("/register");
	}
	render(){
		return (
			<div>
				<div className="login_head">
					<a href="/" className="head_logo"></a>
					<span className="logo_text">登录</span>
				</div>
				<div className="form">
					<div className="input_box">
						<input type="text" placeholder="你的手机号" id=""/>
					</div>
					<span className="tip">请输入注册时用的邮箱或者手机号呀</span>
					<div className="input_box">
						<input type="text" placeholder="密码" id=""/>
					</div>
					<span className="tip">喵，你没输入密码么？</span>
					<p className="forget_pwd">忘记密码?</p>
					<Button type="primary" style={{background: '#00a1d6',
    color:'#fff',borderRadius: '32px'}}>立即登录</Button><WhiteSpace />
					<Button style={{background: '#fff',
    color:'#00a1d6',borderRadius: '32px'}} onClick={this.gotoRegister}>注册</Button><WhiteSpace />
				</div>
			</div>
		)
	}
}

export default Login;