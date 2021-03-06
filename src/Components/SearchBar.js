import React from 'react';

class SearchBar extends React.Component {

state ={term :'' };

onSearchSubmit= (event) => {
    event.preventDefault();
    this.props.onSearch(this.state.term);
}

render() {
    return(
        <div>
            <form onSubmit={this.onSearchSubmit} >
                <label>Search : </label>
                <input type="text" value={this.state.term} onChange={ (e) => {this.setState( {term: e.target.value})}} />
                </form>
        </div>
    );
} 

};

export default SearchBar;