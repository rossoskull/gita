import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Loader from './Components/Loader/Loader';

class App extends Component {

  

  constructor(props) {
    super(props);
    this.state = {
      acc_token: '',
      chapters: [],
    }
    const url = 'http://gita-backend.glitch.me/get_token';
    const options = {
      mode: 'cors',
    }
    fetch(url, options)
    .then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          this.setState({
            acc_token: data.access_token,
          });
          this.getChapters(data.access_token);
        });
      } else {
        console.log('Error occured. Try again later.');
      }
    })
    .catch((err) => {
      console.log(err);
    });
  }

  // Get chapters
  getChapters = (token) => {
    const url = `https://bhagavadgita.io/api/v1/chapters?access_token=${token}`;
    const options = {
        'mode': 'cors',
    }
    fetch(url, options)
    .then((res) => {
        if(res.ok) {
             res.json().then((data) => {
                this.setState({
                    chapters: data,
                });
                const script = document.createElement('script');
                script.innerHTML = `
                    $('.modal').modal(); 
                `;
                document.body.appendChild(script);
                return;
             });
        } else {
            console.log('Error in retrieving chapters');
        }
    })
    .catch((err) => {
        console.log('Chapters error', err);
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <main className='container'>
            <Route exact path='/gita/' render={(props) => <Home {...props} chapters={this.state.chapters}/>} />
            <Route exact path='/gita/about' render={(props) => <h2>about</h2>} />
            <Route exact path='/gita/source' render={(props) => <h2>Sources</h2>} />
          </main>
          <Loader nChapters={this.state.chapters.length} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
