import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/components/home/home'
import Profile from './pages/components/profile/profile'
import Inspiration from './pages/components/inspiration/inspiration'
import Topics from './pages/components/topics/topics'
import NavbarHeader from './aplication/components/navbar'
import Footer from './aplication/components/footer'
import './App.css';

class App extends Component {

  state = {
    viewport: {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    }
  }

  componentDidMount(){
    window.addEventListener('resize', this.changeBanner);
  }

  changeBanner = () =>{
    this.setState({
      viewport: {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
      }
    });
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.changeBanner);
  }

  render() {
    return (
      <Router>
        <div>
          <header className="header">
            <NavbarHeader/>
          </header>
          <main>
            <Route exact path="/" render={(props)=>(
              <Home
                data = {this.props.data}
                viewport = {this.state}/>
            )}/>
            <Route path="/profile" render={(props)=>(
              <Profile data = {this.props.data}
                data = {this.props.data}
                viewport = {this.state}
              />
            )}/>
            <Route path="/inspiration" render={(props)=>(
              <Inspiration data = {this.props.data}
                data = {this.props.data}
                viewport = {this.state}
              />
            )}/>
            <Route path="/topics" render={(props)=>(
              <Topics data = {this.props.data}
                data = {this.props.data}
                viewport = {this.state}
              />
            )}/>
          </main>
          <footer>
            <Footer/>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;

// state = {
//   user: {
//     name:{
//       first:'Sara'
//     }
//   }
// }
//
// async componentDidMount(){
//   const response = await fetch('https://randomuser.me/api/');
//   const data = await response.json();
//   console.log(data);
//   this.setState({
//     user: data.results[0]
//   })
// }
