import React ,{Component} from 'react';
import '../../styles/cases/LoginHead.css';
import '../../styles/cases/LoginAndRegister.css';
import { Button, WhiteSpace } from 'antd-mobile';


class Register extends Component {
	constructor(props){
		super(props);

		this.gotoLogin = this.gotoLogin.bind(this);
	}
	gotoLogin(){
		this.props.history.push("/login");
	}
	render(){
		return (
			<div>
				<div className="login_head">
					<a href="/" className="head_logo"></a>
					<span className="logo_text">注册</span>
				</div>
				<div className="form">
					<div className="input_box">
						<input type="text" placeholder="您的昵称, 例：哔哩哔哩" id=""/>
					</div>
					<span className="tip">这个昵称已经有人用过了</span>
					<div className="input_box">
						<input type="text" placeholder="您的密码, 6-16个字符组成，区分大小写" id=""/>
					</div>
					<span className="tip">设个密码守护你吧！</span>
					<div className="input_box">
						<input type="text" placeholder="您的手机" id=""/>
					</div>
					<span className="tip">亲，看起来不像手机号呢！</span>
					<p>继续注册，表明您已同意<b>《bilibili网会员注册协议》</b></p>
					<Button type="primary" style={{background: '#00a1d6',
    color:'#fff',borderRadius: '32px'}}>同意并注册</Button><WhiteSpace />
					<Button style={{background: '#fff',
    color:'#00a1d6',borderRadius: '32px'}} onClick={this.gotoLogin}>登录</Button><WhiteSpace />
				</div>
			</div>
		)
	}
}

export default Register;