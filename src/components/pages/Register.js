import React ,{Component} from 'react';
import '../../styles/cases/LoginHead.css';
import '../../styles/cases/LoginAndRegister.css';
import { Button, WhiteSpace,Toast } from 'antd-mobile';


class Register extends Component {
	constructor(props){
		super(props);

		this.gotoLogin = this.gotoLogin.bind(this);
		this.checkText = this.checkText.bind(this);
	}
	gotoLogin(){
		this.props.history.push("/login");
	}
	checkText(){
		const pwd = document.getElementById('upassword').value;
		const phone = document.getElementById('uphone').value;
		if(!document.getElementById('uname').value){
			document.getElementById('nameTip').style.display = "block";
		}
		if(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/.test(pwd) === false){
			document.getElementById('pwdTip').style.display = "block";
		}
		if(/^1[3,4,5,7,8]\d{9}$/.test(phone) === false){
			document.getElementById('phoneTip').style.display = "block";
		}
		if(document.getElementById('uname').value && /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/.test(pwd) && /^1[3,4,5,7,8]\d{9}$/.test(phone)){
			Toast.success('注册成功', 1);
		}
	}
	render(){
		return (
			<div>
				<div className="login_head">
					<a href="/" className="head_logo">&nbsp;</a>
					<span className="logo_text">注册</span>
				</div>
				<div className="form">
					<div className="input_box">
						<input type="text" placeholder="您的昵称, 例：哔哩哔哩" id="uname"/>
					</div>
					<span className="tip" id="nameTip">这个昵称已经有人用过了</span>
					<div className="input_box">
						<input type="password" placeholder="您的密码, 6-16个字符组成，区分大小写" id="upassword"/>
					</div>
					<span className="tip" id="pwdTip">设个密码守护你吧！</span>
					<div className="input_box">
						<input type="text" placeholder="您的手机" id="uphone"/>
					</div>
					<span className="tip" id="phoneTip">亲，看起来不像手机号呢！</span>
					<p>继续注册，表明您已同意<b>《bilibili网会员注册协议》</b></p>
					<Button type="primary" style={{background: '#00a1d6',
    color:'#fff',borderRadius: '32px'}} onClick={this.checkText}>同意并注册</Button><WhiteSpace />
					<Button style={{background: '#fff',
    color:'#00a1d6',borderRadius: '32px'}} onClick={this.gotoLogin}>登录</Button><WhiteSpace />
				</div>
			</div>
		)
	}
}

export default Register;