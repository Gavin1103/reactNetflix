import React, { Component } from 'react';

class Genre extends Component {
    render() {
        return <div className="genreTitle"><h5>{this.props.name}</h5></div>;
    }
}
export default Genre;