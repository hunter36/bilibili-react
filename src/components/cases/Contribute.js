import React , {Component} from 'react';
import '../../styles/cases/Contribute.css';

class Contribute extends Component {
	render(){
		return (
			<div className="contribute">
				<div className="no_data">
					<img src="https://s1.hdslb.com/bfs/static/mult/images/login.png" alt="no_data"/>
					<p>你还没有登录哦~</p>
					<p>赶快登录打开新世界的大门</p>
				</div>
				<div className="copy">
					<p>哔哩哔哩 沪ICP备13002172号-3</p>
					<p>信息网络传播视听节目许可证：0910417</p>
				</div>
			</div>
		)
	}
}

export default Contribute;