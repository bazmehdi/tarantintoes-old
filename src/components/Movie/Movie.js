import React, {Component} from 'react';
import './Movie.scss';

class Movie extends Component {
  constructor() {
    super();
    this.state = {
      movie: []
    }
  }

  componentDidMount() {
    const id = this.props.location.state.id
    console.log('ID fetched..', id)
    fetch('/' + id)
      .then(res => res.json())
      .then(movie => this.setState({movie}, () => console.log('Data fetched..', movie)));
  }

  render() {
    return (

        <main>
          <div className="movie-wrapper">
          {this.state.movie.map(data =>
            <div key={data.id} id={data.id} className="movie-box" style={{backgroundImage: 'url(../../../images/' + data.shot_path + ')'}}>
              <div className="overlay"></div>
              <h3>{data.timestamp}</h3>
            </div>
          )}
          </div>
        </main>

    );
  }
}

export default Movie;