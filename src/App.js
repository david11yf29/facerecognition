import React from 'react';
import './App.css';

import Navigation from './components/Navigation/Navigation';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        {/* <Logo />
        <ImageLinkForm />
        <FaceRecognition /> */}
      </div>
    );
  }
}

export default App;
