import React, { Component } from 'react';
import PhotosPage from './features/photos-page';
import Navigation from './features/navigation';
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        <div className='content'>
          <PhotosPage/>
        </div>
      </div>
    );
  }
}

export default App;
