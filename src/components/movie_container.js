import React, { Component } from 'react';
import axios from 'axios';
import Movie from './movie';

class MoviesContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
    }
  }

  componentDidMount() {
    const url = 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json';

    axios.get(url)
      .then(res => {
        this.setState({
          movies: res.data.feed.entry,
        });
      })
      .catch(err => console.log('Axios Error:', err));
  }

  render() {
    const movieList = this.state.movies.map((value, index) => {
      return <Movie info={value} key={index} />;
    });

    return (
      <div>
        {movieList}
      </div>
    )
  }
}

export default MoviesContainer;
