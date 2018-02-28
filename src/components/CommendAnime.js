import React , { Component } from 'react';
import { Icon} from 'antd-mobile';

class CommendAnime extends Component {
	render(){
		return (
			<div className="commendAnime">
				<div className="commend">
					<div className="commend_head">
						<div className="title">
							<p>热门推荐</p>
						</div>
						<div className="rank">
							<i className="iconfont">&#xe6ae;</i>排行榜
							<Icon type="right" size="ig" color="#999" />
						</div>
					</div>
					<div className="contain">
						<ul>
							<li>
								<div>
									<img src="https://i0.hdslb.com/bfs/archive/bf2bf977722eb01bc2c58bbc6ba4e891b97bdad1.jpg@320w_200h.webp" alt="img"/>
								</div>
								<span>【莓良心】不过是外遇第三年 宽容一点吧</span>
							</li>
							<li>
								<div>
									<img src="https://i0.hdslb.com/bfs/archive/bf2bf977722eb01bc2c58bbc6ba4e891b97bdad1.jpg@320w_200h.webp" alt="img"/>
								</div>
								<span>【莓良心】不过是外遇第三年 宽容一点吧</span>
							</li>
							<li>
								<div>
									<img src="https://i0.hdslb.com/bfs/archive/bf2bf977722eb01bc2c58bbc6ba4e891b97bdad1.jpg@320w_200h.webp" alt="img"/>
								</div>
								<span>【莓良心】不过是外遇第三年 宽容一点吧</span>
							</li>
							<li></li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}

export default CommendAnime;