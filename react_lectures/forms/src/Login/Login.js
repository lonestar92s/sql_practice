
import React, { Component } from 'react';

class Login extends Component {
  constructor(){
    super();

    this.state = {
      username: '',
      password: '',
    }
  }
  handleSubmit = (event) => {
    event.preventDefault(event);

    this.props.login(this.state.username);

  }
  handleChange = (event) => {
    this.setState({[event.currentTarget.name]: event.currentTarget.value});
  }
  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' autoComplete="off" name="username" placeholder="username" value={this.state.username} onChange={this.handleChange} />
        <input type='password' name="password" placeholder="password" value={this.state.password} onChange={this.handleChange} />
        <input type='submit' value="Submit" />
      </form>
      )
  }
}


export default Login;