import React , { Component } from 'react';
import axios from 'axios';

class SubAnime extends Component {
	state = {
		subAnimeList:[]
	}
	componentDidMount(){
		this.getData();
	}
	getData(){
      axios.get('/utils/anime.json')
      .then((res)=>{
        // console.log(res.data.subAnime.data);
        // console.log(res.data);
        this.setState({
          subAnimeList : res.data.subAnime.data
        });
      })
    }
	render(){
		return (
			<div className="subAnime">
				<div className="commend">
					<div className="commend_head">
						<div className="title">
							<p>热门推荐</p>
						</div>
					</div>
					<div className="contain">
						<ul>
						{
							this.state.subAnimeList.map((item,index)=>{
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

export default SubAnime;