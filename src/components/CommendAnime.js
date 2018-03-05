import React , { Component } from 'react';
import { Icon} from 'antd-mobile';
import axios from 'axios';

class CommendAnime extends Component {
	state = {
		animeList:[]
	}
	componentDidMount(){
		this.getData();
	}
	getData(){
      axios.get('/utils/anime.json')
      .then((res)=>{
        // console.log(res.data.CommendAnime.data);
        // console.log(res.data);
        this.setState({
          animeList : res.data.CommendAnime.data
        });
      })
    }
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
						{
							this.state.animeList.map((item,index)=>{
								if(index < 4){
									return (
										<li key={item.aid}>
											<div>
												<img src={"https:" + (item.pic).substring(5) + "@320w_200h.webp"} alt={item.title}/>
											</div>
											<span>{item.title}</span>
										</li>
									)
								}
							})
						}	
						</ul>
					</div>
				</div>
			</div>
		)
	}
}

export default CommendAnime;