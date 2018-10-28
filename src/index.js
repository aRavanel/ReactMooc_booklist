import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchbar';

const API_KEY =  'AIzaSyBe51vQk0tGHEScfqVYP4yiLvHakA6ISw4'

// create a new compoenent. This componnent should produce some HTML
// const App = function(){
	// return <div>Hi!</div>;
// }
const App = () => {
	return(
		<div>
			<SearchBar />
		</div>
	);

}

// Take this compnonent's generated HTML and put it on the page (in the DOM)
// NB  : <App /> idem <App></App>
ReactDOM.render(<App />, document.querySelector('.container'));