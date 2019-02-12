
import React, { Component } from 'react'

export default class PuppyList extends Component {
 //delete
  handleDelete = (itemToBeDeleted)=>{
    console.log(itemToBeDeleted);
    this.props.deleteDog(itemToBeDeleted.currentTarget.value)

  }
    render() {
        const listPups = this.props.dogs.map((item, index) => {
            return (
                <li key={index}>
                    <h1>{item.name}, {item.age}, {item.breed} <button value={index} onClick={this.handleDelete}>Delete</button></h1>
                    {/* @TODO : ADD A DELETE BUTTON */}
                </li>

            )
        })
        return (
            <ul className='list'>
                {listPups}
            </ul>
        )
    }
}