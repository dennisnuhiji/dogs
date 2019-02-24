import React, { Component } from 'react';
import { fetchBreedDog } from '../../loader/loader';
import './Dog.less';

export default class Dog extends Component {
    state = { image: undefined};

    componentWillReceiveProps(nextProps) {
        if (nextProps.breed)
            this.fetchDog(nextProps.breed);
    }
    fetchDog = async (breed) => {
        try {
            const image = await fetchBreedDog(breed);
            this.setState({ image });
        } catch (error) {
            this.props.setError(error);
        }
    }
    render() {
        const { image, } = this.state;
        const { breed } = this.props;
        return (
            image ? <div className="dog">
                <img src={image}></img>
                <label>{breed}</label>
            </div> : <div />
        );
    }
}