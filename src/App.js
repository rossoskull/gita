import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';

class App extends Component {

  

  constructor(props) {
    super(props);
    this.state = {
      acc_token: '',
    }
    const scope = this;
    const url = 'http://gita-backend.glitch.me/get_token';
    const options = {
      mode: 'cors',
    }
    fetch(url, options)
    .then((res) => {
      console.log('Hello');
      console.log(res);
      if (res.ok) {
        res.json().then((data) => {
          scope.setState({
            acc_token: data.access_token,
          })
        });
      } else {
        console.log('Error occured. Try again later.');
      }
    })
    .catch((err) => {
      alert('Big error');
      console.log(err);
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <main className='container'>
            <Route exact path='/' component={Home} />
          </main>
          {this.state.acc_token}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
