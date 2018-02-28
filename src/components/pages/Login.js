import React ,{Component} from 'react';
import '../../styles/cases/LoginHead.css';
import '../../styles/cases/LoginAndRegister.css';
import { Button, WhiteSpace , Toast} from 'antd-mobile';

class Login extends Component {
	constructor(props){
		super(props);

		this.gotoRegister = this.gotoRegister.bind(this);
		this.checkData = this.checkData.bind(this);
	}
	checkData(){
		const phone = document.getElementById('loginName').value;
		const pwd = document.getElementById('loginPwd').value;
		if(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/.test(pwd) === false){
			document.getElementById('pwdTest').style.display = "block";
		}
		if(/^1[3,4,5,7,8]\d{9}$/.test(phone) === false){
			document.getElementById('phoneTest').style.display = "block";
		}
		if(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/.test(pwd) && /^1[3,4,5,7,8]\d{9}$/.test(phone)){
			Toast.success('登录成功', 1);
		}
	}
	gotoRegister(){
		this.props.history.push("/register");
	}
	render(){
		return (
			<div>
				<div className="login_head">
					<a href="/" className="head_logo">&nbsp;</a>
					<span className="logo_text">登录</span>
				</div>
				<div className="form">
					<div className="input_box">
						<input type="text" placeholder="你的手机号" id="loginName"/>
					</div>
					<span className="tip" id="phoneTest">请输入注册时用的邮箱或者手机号呀</span>
					<div className="input_box">
						<input type="password" placeholder="密码" id="loginPwd"/>
					</div>
					<span className="tip" id="pwdTest">喵，你没输入密码么？</span>
					<p className="forget_pwd">忘记密码?</p>
					<Button type="primary" style={{background: '#00a1d6',
    color:'#fff',borderRadius: '32px'}} onClick={this.checkData}>立即登录</Button><WhiteSpace />
					<Button style={{background: '#fff',
    color:'#00a1d6',borderRadius: '32px'}} onClick={this.gotoRegister}>注册</Button><WhiteSpace />
				</div>
			</div>
		)
	}
}

export default Login;