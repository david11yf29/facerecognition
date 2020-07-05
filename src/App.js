import React from 'react';
import './App.css';

import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';

const app = new Clarifai.App({
  apiKey: 'de7699b31c3d4c07961726c83613ae0e'
});

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {}
    }
  }

  calculateFaceLocation = (data) => {

  }

  onInputChange = (event) => {
    this.setState({
      input: event.target.value
    })
    // console.log(event.target.value);
  }

  onButtonSubmit = () => {
    // console.log('click');
    this.setState({
      imageUrl: this.state.input
    })
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input
    ).then(
      function(response) {
        this.calculateFaceLocation(response);
        // console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
      },
      function(err) {
        // there was an error
        console.log(err);
      }
    );
  }

  render() {
    return (
      <div className="App">
        <Particles 
          className="particles"
          params={particlesOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm 
          onInputChange={this.onInputChange} 
          onButtonSubmit={this.onButtonSubmit} />
        <FaceRecognition imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;
