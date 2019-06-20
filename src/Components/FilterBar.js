import React from 'react';

class FilterBar extends React.Component {

onFilter = event => {
    this.props.onFilterSearch(event.target.value);
}

render() {
    console.log(this.props.query);
    return(
        <div>
            <label>Filter Bar : </label>
            <input type="text" value={this.props.query} onChange={this.onFilter} />
        </div>
    );
}

};

export default FilterBar;