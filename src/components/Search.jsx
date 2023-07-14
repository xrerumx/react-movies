import React, { Component } from 'react';

class Search extends Component {
    state = {
        search: '',
        type: 'all',
    };

    handleKey = (event) => {
        if (event.key === 'Enter') {
            this.props.handleSearch(this.state.search, this.state.type);
        }
    };

    handleFilter = (event) => {
        this.setState(
            () => ({ type: event.target.dataset.type }),
            () => {
                this.props.handleSearch(this.state.search, this.state.type);
            }
        );
    };

    render() {
        return (
            <div className='row'>
                <div className='input-field'>
                    <input
                        placeholder='Search'
                        type='search'
                        className='validate'
                        value={this.state.search}
                        onChange={(e) =>
                            this.setState({ search: e.target.value })
                        }
                        onKeyDown={this.handleKey}
                    />
                    <button
                        className='btn search-btn indigo lighten-1'
                        onClick={() =>
                            this.props.handleSearch(
                                this.state.search,
                                this.state.type
                            )
                        }
                    >
                        Search
                    </button>
                </div>
                <div>
                    <label>
                        <input
                            className='with-gap'
                            name='type'
                            type='radio'
                            data-type='all'
                            onChange={this.handleFilter}
                            checked={this.state.type === 'all'}
                        />
                        <span>All</span>
                    </label>
                    <label>
                        <input
                            className='with-gap'
                            name='type'
                            type='radio'
                            data-type='movie'
                            onChange={this.handleFilter}
                            checked={this.state.type === 'movie'}
                        />
                        <span>Movies</span>
                    </label>
                    <label>
                        <input
                            className='with-gap'
                            name='type'
                            type='radio'
                            data-type='series'
                            onChange={this.handleFilter}
                            checked={this.state.type === 'series'}
                        />
                        <span>Series</span>
                    </label>
                </div>
            </div>
        );
    }
}

export { Search };
