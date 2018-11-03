import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchbar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY =  'AIzaSyBe51vQk0tGHEScfqVYP4yiLvHakA6ISw4';



// create a new compoenent. This componnent should produce some HTML
// const App = function(){
	// return <div>Hi!</div>;
// }

class App extends Component {
	constructor(props){
		super(props);
		this.state = { 
			videos: [],
			selectedVideo: null
		 };

		YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
			this.setState({
				videos : videos,
				selectedVideo: videos[0]
			});
		});

	}

	// onVideoSelect et videos sont des porperties/attributs de VideoList
	// ensuite dans video_list cet attribut est assigén a VideoListItem
	render() {
		return(
			// donne une instance de searchbar
			<div>
				<SearchBar /> 
				<VideoDetail video = {this.state.selectedVideo}/>
				<VideoList 
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					videos = {this.state.videos} />	
			</div>
		);
	}
}

// Take this compnonent's generated HTML and put it on the page (in the DOM)
// NB  : <App /> idem <App></App>
ReactDOM.render(<App />, document.querySelector('.container'));  