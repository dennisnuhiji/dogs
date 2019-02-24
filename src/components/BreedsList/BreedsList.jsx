import React, { Component } from 'react';
import { fetchBreedsList } from '../../loader/loader';
import './BreedsList.less';

export default class BreedsList extends Component {
    state = { breedsList: [], selectedBreed: undefined };
    componentDidMount() {
        this.fetchList();
    }
    fetchList = async () => {
        try {
            const breedsList = await fetchBreedsList();
            this.setState({ breedsList });
        } catch (error) {
            this.props.setError(error);
        }
    }
    selectBreed = (breed) => {
        this.props.selectBreed(breed);
        this.setState({ selectedBreed: breed });
    }
    render() {
        const { breedsList, selectedBreed } = this.state;
        return (
            <div className="breedsList">
                {breedsList.map(breed =>
                    <button
                        key={breed}
                        className={selectedBreed == breed ? 'active' : ''}
                        onClick={() => this.selectBreed(breed)}
                    >
                        {breed}
                    </button>)}
            </div>
        );
    }
}