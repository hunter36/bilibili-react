import React , { Component } from 'react';
import {  Icon ,Carousel} from 'antd-mobile';
import '../styles/Main.css';

export default class Main extends Component {
    state = {
      data: ['1', '2', '3'],
      imgHeight: 176,
      slideIndex: 0,
    }
    componentDidMount() {
      // simulate img loading
      setTimeout(() => {
          this.setState({
              data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
          });
      }, 100);
    }
    render(){
        return (
          <div className="main">
              <Carousel
                  autoplay={false}
                  infinite
                  selectedIndex={1}
                  beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                  afterChange={index => console.log('slide to', index)}
                  className="slider_box"
              >
              {this.state.data.map(val => (
                  <a
                      key={val}
                      href="http://www.alipay.com"
                      style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                  >
                      <img
                          src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
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

              <div className="commend">
                  <div className="commend_head">
                      <div className="title">
                          <i className="iconfont">&#xe6d4;</i>
                          <p>热门推荐</p>
                      </div>
                      <div className="more">
                          查看更多
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
    