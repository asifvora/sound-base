import React, { Component } from 'react';
import { fetchSearchSongs } from "../../actions/SongActions";

class NavSearch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            limit: 50,
            linkedPartitioning: 1
        }
        this.onKeyDown = this.onKeyDown.bind(this);
        this.onKeyPress = this.onKeyPress.bind(this);
        this.input = null;
    }

    componentDidMount() {
        let match = this.props;
        console.log('this.props', match);
        document.addEventListener('keydown', this.onKeyDown, false);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.onKeyDown, false);
    }

    onKeyDown(e) {
        if (e.keyCode === 191) {
            const insideInput = e.target.tagName.toLowerCase().match(/input|textarea/);
            if (!insideInput) {
                e.preventDefault();
                this.input.focus();
            }
        }
    }

    onKeyPress(e) {
        let { dispatch } = this.props;
        let { limit, linkedPartitioning } = this.state;

        if (e.charCode === 13) {
            let query = e.currentTarget.value.trim();
            if (query !== '') {
                let pathname = `/songs/search/${query}`;
                dispatch(fetchSearchSongs(limit, linkedPartitioning, query));
                this.props.history.push(pathname);
            }
        }
    }

    render() {
        return (
            <div className="nav-search">
                <i className="nav-search__icon ion-search" />
                <input
                    ref={(node) => { this.input = node; }}
                    className="nav-search__input"
                    placeholder="SEARCH"
                    onKeyPress={this.onKeyPress}
                    type="text"
                />
            </div>
        );
    }
}

export default NavSearch;
