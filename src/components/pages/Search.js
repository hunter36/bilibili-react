import React,{Component} from 'react';
import { SearchBar } from 'antd-mobile';
import '../../styles/Search.css';
class Search extends Component {
	constructor(props){
		super(props);

		this.cancel = this.cancel.bind(this);
	}
	cancel(){
		this.props.history.push("/");
	}
	render(){
		return (
			<div className="search">
				<SearchBar
			        placeholder="搜索视频、番剧、UP主或AV号"
			        onSubmit={value => console.log(value, 'onSubmit')}
			        onClear={value => console.log(value, 'onClear')}
			        onFocus={() => console.log('onFocus')}
			        onBlur={() => console.log('onBlur')}
			        onCancel={this.cancel}
			        showCancelButton
			        onChange={this.onChange}
			    />
			    <div className="tags">
			    	<p className="tags_title">大家都在搜</p>
			    	<div className="tags_contain">
			    		<div className="my_tag">紫罗兰永恒花园</div>
			    		<div className="my_tag">紫罗兰永恒花园</div>
			    		<div className="my_tag">紫罗兰永恒花园</div>
			    		<div className="my_tag">紫罗兰永恒花园</div>
			    		<div className="my_tag">紫罗兰永恒花园</div>
			    	</div>
			    </div>
		    	<div className="search_history">
		    		<p>历史搜索</p>
		    	</div>
			</div>
		)
	}
}

export default Search;