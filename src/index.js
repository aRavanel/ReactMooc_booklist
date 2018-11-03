import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchbar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import _ from 'lodash';
const API_KEY =  'AIzaSyBe51vQk0tGHEScfqVYP4yiLvHakA6ISw4'; 


// creation of the main component called App. c'est un composant type class et non fonction ( const App = function(){})
class App extends Component {
	
	constructor(props){
		super(props);
		this.state = { 
			videos: [],
			selectedVideo: null
		 };
		 this.videoSearch('surboards')
	}

	// fonction qui est appellée par default dans le constructeur à la création de App
	// elle appelle une recherche youtube et remplit le state du composant par les videos
	videoSearch(term){
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({
				videos : videos,
				selectedVideo: videos[0]
			});
		});
	}

	//NB :  onVideoSelect et videos sont des porperties/attributs de VideoList
	// ensuite dans video_list cet attribut est assigén a VideoListItem
	// NB : <NomComposant argument />
	render() {
		// debounce (fonction, 300) : debounce empeche la fonction detre appellée plus svt que 300ms
		const videoSearch = _.debounce( (term)=> {this.videoSearch(term)}, 300 );
		
		return(

			// cree et affiche une instance de searchbar, videoDetail et VideoList
			// quand searchbar change : lance une recherche
			// videoDetail affiche la video de l'état
			// VideoLIst change letat quand on clique sur une video
			<div>
				<SearchBar onSearchTermChange = {videoSearch} /> 
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




// -------------------- explications -------------------------------
