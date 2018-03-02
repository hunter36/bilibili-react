import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore , combineReducers} from 'redux';

const reducers = combineReducers({
	list : function(state=[],action){
		switch(action.type){
			case "SLIDER_ITEM" : 
				var slider = [...state];
				slider.push([{"id":32319,"contract_id":"","pos_num":1,"name":"专栏0227","pic":"http://i0.hdslb.com/bfs/archive/689f9f170fd38c719c256fc5f62cb6e1a2196a53.jpg","litpic":"","url":"https://www.bilibili.com/read/cv249150","style":0,"agency":"","label":"","intro":"","request_id":"1519885709","src_id":1696,"area":1,"is_ad_loc":false,"ad_cb":"","title":"","server_type":0,"cm_mark":0},{"id":33030,"contract_id":"","pos_num":2,"name":"免流卡","pic":"http://i0.hdslb.com/bfs/archive/18a22f46dda25145b4c09788f299c7cde3c22fbe.jpg","litpic":"","url":"https://www.bilibili.com/read/cv254695/","style":0,"agency":"","label":"","intro":"","request_id":"1519885709","src_id":1697,"area":1,"is_ad_loc":false,"ad_cb":"","title":"","server_type":0,"cm_mark":0},{"id":32073,"contract_id":"","pos_num":3,"name":"科技0227","pic":"http://i0.hdslb.com/bfs/archive/490fba385987c5dae8147eadd6a3f9cda81fbcd2.jpg","litpic":"","url":"https://www.bilibili.com/read/cv242367/","style":0,"agency":"","label":"","intro":"","request_id":"1519885709","src_id":1698,"area":1,"is_ad_loc":false,"ad_cb":"","title":"","server_type":0,"cm_mark":0}]);
				return slider;

			default :
				return state;
		}
	}
});

const store = createStore(reducers , {});

function renderPage(){
	ReactDOM.render(<App store={store}/>, document.getElementById('root'));
}
renderPage();
store.subscribe(renderPage);

registerServiceWorker();

