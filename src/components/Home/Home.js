import React, {Component} from 'react';
import './Home.scss';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      shot: []
    }
  }

  componentDidMount() {
    fetch('/shot')
      .then(res => res.json())
      .then(shot => this.setState({shot}, () => console.log('Data fetched..', shot)));
  }

  render() {
    return (
        <div className="wrapper">
        {this.state.shot.map(data =>
          <div>
            <div key={data.id} id={data.image_id} className="box" style={{backgroundImage: 'url(../../../images/' + data.shot_path + ')'}}>
              <div className="overlay"></div>
              <h3 className="desktop">{data.title} | {data.timestamp}</h3>
            </div>
            <h3 className="mobile">{data.title} | {data.timestamp}</h3>
          </div>
        )}
        </div>
    );
  }
}

export default Home;