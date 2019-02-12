
import React, { Component } from 'react';

export default class DogForm extends Component {
	state = {
		name: '',
		age: '',
		breed: ''
	}

clearForm = () => { 
  document.getElementById("form-input").reset();
}


  handleSubmit = (event) => {
   	let dog = {
   		name: this.state.name,
   		age: this.state.age,
   		breed: this.state.breed
   	}
    this.props.addDog(dog)
    event.preventDefault();
    this.setState({
    	name: '',
    	age: '',
    	breed:''
    })
    }
  
  handleChange = (event) => {
    this.setState({
    	[event.currentTarget.name] : event.currentTarget.value
    })
  }
  render(){
    return (
      <form onSubmit={this.handleSubmit} id="form-input">
        <input type='text' autoComplete="off" name="name" placeholder="name" value={this.state.name} onChange={this.handleChange} />
        <input type='text' name="age" placeholder="age" value={this.state.age} onChange={this.handleChange}  />
        <input type='text' name="breed" placeholder="breed" value={this.state.breed} onChange={this.handleChange} />
        <input type='submit' value="Submit" />
      </form>
      )
  }

}