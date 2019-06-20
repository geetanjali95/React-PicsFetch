import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import FilterBar from './FilterBar';
import ImageList from './ImageList';

class App extends React.Component {

state={ 
    images: [],
    query: ''
};

onSearch= async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos' , {
        params: { query: term },
        headers: {
            Authorization: 'Client-ID 763af074b1f7debea49c55c9bb2e6487c67a62ed5fccad81d3172100ed756d1b'
        }
    });

    this.setState( { images: response.data.results});
    
}

onFilterSearch= (query) => {
    this.setState({query});
}

filteredImages = () => {
    return this.state.images.filter( image => {
        return image.tags.find( tag => {
            return tag.title.includes(this.state.query);
        });
    }).sort((image1,image2) => {
        return image2.likes-image1.likes;
    });
}

render() {
    return(
        <div>
            <br />
            <SearchBar onSearch= {this.onSearch} />
            <br />
            <FilterBar onFilterSearch={this.onFilterSearch} query={this.state.query} />
            <br />
            <ImageList images={this.filteredImages()} />
        </div>
        );
    }

};

export default App;
