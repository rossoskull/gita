import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <main className='container'>
            <Route exact path='/' component={Home} />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
