import React, { Component } from 'react';
import './App.css'
import Login from './Login/Login';

import MainContainer from './MainContainer/index'

export default class App extends Component {

constructor(){
    super();

    this.state = {
      logged: false,
      username: ''
    }
  }
  login = (username) => {
    this.setState({
      logged: true,
      username: username
    })
  }
  render() {
    console.log(this.state)
    return (
      <div className="App">
        {this.state.logged ? <MainContainer username={this.state.username}/> : <Login login={this.login}/>}
      </div>
    );
  }
}
