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
		this.state = {term: ''}; // this.state.term initialise a ''
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
			<div>
				<input  
				value={this.state.term} // controlled component
				onChange = { event => this.setState({term: event.target.value }) } />
				{/* Value of the input : {this.state.term} */}
			</div>
		);
	}

}


export default SearchBar;
