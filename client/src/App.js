import React, { Component } from 'react';
import PhotosPage from './features/photos-page';
import Navigation from './features/navigation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        <PhotosPage/>
      </div>
    );
  }
}

export default App;
