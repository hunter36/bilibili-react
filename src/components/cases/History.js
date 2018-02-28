import React , {Component} from 'react';
import '../../styles/cases/History.css';

class History extends Component {
	constructor(props){
		super(props);

		this.gotoIndex = this.gotoIndex.bind(this);
	}
	gotoIndex(){
		this.props.history.push("/")
	}
	render(){
		return (
			<div className="history">
				<div className="no_data">
					<img src="https://s1.hdslb.com/bfs/static/mult/images/noContent.png" alt="no_data"/>
					<p>你还没有历史记录</p>
					<p>快去发现<span onClick={this.gotoIndex}>新内容</span>吧</p>
				</div>
				<div className="copy">
					<p>哔哩哔哩 沪ICP备13002172号-3</p>
					<p>信息网络传播视听节目许可证：0910417</p>
				</div>
			</div>
		)
	}
}

export default History;