
import React, { Component } from 'react'
import DogForm from './dogForm'
import PuppyList from './puppyList'

export default class MainContainer extends Component {

    state = {
        dogs: []
    }

    addDog = (dog) => {
        let newDogs = this.state.dogs
        newDogs.push(dog)
        this.setState({
            dogs: newDogs
        })
    }

    //@TODO : DELETE A DOG 
    // ==> ==> ==> ==> ==> ==> ==> ==> ==> ==> ==> ==> ==> ==> ==> ==> ==> ==> ==> ==> 
    deleteDog = (dog) => {
        let newDogs = this.state.dogs
        this.state.dogs.splice(dog, 1);
        this.setState({
            dogs: newDogs
        })
    }

    //@TODO : UPDATE A DOG
    //  ==> ==> ==> ==> ==> ==> ==> ==> ==> ==> ==> ==> ==> ==> ==> ==> ==> ==> ==> 


    render() {

        return (
            <div>
                <h1>Helloooo {this.props.username}</h1>
                <div className="list-wrapper">
                    <ul className="list">
                        <PuppyList dogs={this.state.dogs} deleteDog={this.deleteDog} />
                    </ul>
                </div>
                <DogForm addDog={this.addDog} />
            </div >
        )
    }

}