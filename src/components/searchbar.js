import React, {Component} from 'react';

// V1
// const SearchBar = () => {
	// return <input />;
// };

// V2

// NB : class based component
class SearchBar extends Component{
	
	constructor(props){
		super(props);
		this.state = {term: ''}; // this.state.term initialisé a ''
	}

	// V2A
	// render() {
	// 	return <input  onChange={this.onInputChange} />;
	// }
	// onInputChange(event){
	// 	console.log(event.target.value)
	// }

	// V2B
	// render() {
	// 	return <input  onChange={ event => console.log(event.target.value)} />;
	// }

	// V2C
	render() {
		return (
			// la searchbar a un champ "input" qui a pour valeur un attribut de l'état (term)
			// quand input change, on appelle la fonction onInputChange qui met a jour avec la valeur renseigée
			<div className="search-bar">
				<input  
				value={this.state.term} // controlled component
				onChange = { event => this.onInputChange(event.target.value) } />
				{/* Value of the input : {this.state.term} */}
			</div>
		);
	}

	onInputChange(term){
		this.setState({term});
		this.props.onSearchTermChange(term);
	}

}


export default SearchBar;
