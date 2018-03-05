import React , { Component } from 'react';
import {  Icon ,Carousel} from 'antd-mobile';
import '../styles/Main.css';
import axios from 'axios';
export default class Main extends Component {
    state = {
      data: [],
      imgHeight: 176,
      slideIndex: 0,
      hotList:[],
      comicList:[]
    }
    componentDidMount() {
      this.getData();
      // simulate img loading
      setTimeout(() => {
          this.setState({
              data: ['1bb602c2d9c1877297645a09cb55715a6e615a14.png', '6eee28dbc22946880a97ea6c0e01aba3d8e70de7.jpg', 'e2ae7e0df32b8f7b05915d18ad4d5af50f7b2da6.jpg'],
          });
      }, 100);
    }
    getData(){
      axios.get('/utils/main.json')
      .then((res)=>{
        // console.log(res.data.hotlist.data);
        // console.log(res.data.comiclist.data.archives);
        this.setState({
          hotList : res.data.hotlist.data,
          comicList : res.data.comiclist.data.archives
        });
      })
    }
    render(){
        return (
          <div className="main">
              <Carousel
                  autoplay={true}
                  infinite
                  selectedIndex={1}
                  className="slider_box"
              >
              {this.state.data.map(val => (
                  <a
                      key={val}
                      href="/"
                      style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                  >
                      <img
                          src={`https://i0.hdslb.com/bfs/archive/${val}@480w_300h.webp`}
                          alt=""
                          style={{ width: '100%', verticalAlign: 'top' }}
                          onLoad={() => {
                            // fire window resize event to change height
                            window.dispatchEvent(new Event('resize'));
                            this.setState({ imgHeight: 'auto' });
                          }}
                      />
                  </a>
              ))}
              </Carousel>
              <div className="commend">
                  <div className="commend_head">
                      <div className="title">
                          <i className="iconfont">&#xe6d4;</i>
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
                          this.state.hotList.map((item,index)=>{
                            if(index < 4){
                              return (
                                <li key={item.aid}>
                                    <div>
                                        <img src={"https:" + (item.pic + "@320w_200h.webp").substring(5)} alt={item.title}/>
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

              <div className="commend">
                  <div className="commend_head">
                      <div className="title">
                          <i className="iconfont">&#xe6d4;</i>
                          <p>动画</p>
                      </div>
                      <div className="more">
                          查看更多
                          <Icon type="right" size="ig" color="#999" />
                      </div>
                  </div>
                  <div className="contain">
                      <ul>
                        {
                          this.state.comicList.map((item,index)=>{
                            if(index < 4){
                              return (
                                <li key={item.aid}>
                                    <div>
                                        <img src={"https:" + (item.pic + "@320w_200h.webp").substring(5)} alt={item.title}/>
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
    