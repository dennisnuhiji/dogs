import React, { Component } from 'react';
import BreedsList from './BreedsList/BreedsList';
import Dog from './Dog/Dog';
import Error from './Error/Error';
import './Dashboard.less';

export default class Dashboard extends Component {
    state = { selectedBreed: '', error: undefined };
    render() {
        const { selectedBreed, error } = this.state;
        return (
            <div className="dashboard">
                {error && <Error error={error} />}
                <div className="header">
                    <h2>BREEDS LISTS</h2>
                </div >

                <BreedsList selectBreed={this.selectBreed} setError={this.setError} />
                <Dog breed={selectedBreed} setError={this.setError} />
            </div >
        );
    }
    selectBreed = (selectedBreed) => {
        this.setState({ selectedBreed });
    }
    setError = (error) => {
        this.setState({ error });
    }
}