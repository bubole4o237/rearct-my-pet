// import { useEffect, useState } from 'react';
import { Component } from 'react';
import CategoriesNavigation from './CategoriesNavigation/CategoriesNavigation';
import * as petsService from '../../services/petService';
import Pet from '../Pet/Pet';

// import './Categories.css';


class Categories extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pets: [],
            currentCategory: 'all'
        };
    }

    componentDidMount() {
        petsService.getAll()
            .then(res => this.setState({ pets: res }))
    }

    componentDidUpdate(prevProps) {
        const category = this.props.match.params.category;

        if (prevProps.match.params.category == category) {
            return;
        }

        petsService.getAll(category)
            .then(res => {
                this.setState({ pets: res, currentCategory: category })
            })

    }


    render() {
        // console.log(this.props);
        // console.log(this.state.pets);

        return (
            <section className="dashboard">
                <h1>Dashboard</h1>

                <CategoriesNavigation />

                <ul className="other-pets-list">
                    {this.state.pets.map(pet =>
                        <Pet
                            key={pet.id}
                            id={pet.id}
                            /* name={pet.name}
                            category={pet.category}
                            imageURL={pet.imageURL}
                            description={pet.description}
                            likes={pet.likes} */

                        />
                    )}
                </ul>
            </section>
        );
    }
}

export default Categories;


// "http://www.stickpng.com/assets/images/580b57fbd9996e24bc43bbde.png"

/*
class Iavor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            onOff: false
        }

        this.updateCount = this.updateCount.bind(this);
    }

    componentDidMount() {
        return this.setState({onOff: true});
    }

    componentDidUpdate() {
        console.log('The state was updated!');
    }


    updateCount() {
        return this.setState({onOff: this.state.onOff ? false : true});
    }


    render() {

        // console.log(this.state.onOff);
        let classNameButton = this.state.onOff ? 'activated' : 'nonActivated' ;
        return (
            <>
                <h1>Hello</h1>
                <button className={classNameButton} onClick={this.updateCount}>{this.state.onOff ? 'ON' : 'OFF'}</button>
                <p>{this.state.onOff ? 'The button is turned ON' : 'The button is turned OFF'}</p>
            </>
        );
    }

}

export default Iavor;

*/