'use strict';

import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSongs, fetchMoreSongs } from "../../actions/SongActions";
import { spinnerLoader } from "../common";

class Songs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            success: false,
            songs: [],
            nextLink: false,
            limit: 50,
            linkedPartitioning: 1
        }
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        let { limit, linkedPartitioning } = this.state;
        let { dispatch } = this.props;
        dispatch(fetchSongs(limit, linkedPartitioning));
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(event) {
        let { nextLink, isLoading } = this.state;
        const { dispatch } = this.props;
        console.log('isLoading', isLoading)
        isLoading === false && this.setState({ isLoading: true }, () => {
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                if (nextLink && this.state.isLoading) {
                    dispatch(fetchMoreSongs(nextLink));
                } else {
                    this.setState({ isLoading: false })
                }
            }
        })
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.songs.success === true) {
            this.setState({
                success: nextProps.songs.success,
                isLoading: nextProps.songs.isLoading,
                songs: nextProps.songs.songs,
                nextLink: nextProps.songs.nextLink,
            });
        }
        if (nextProps.songs.success === true) {
            this.setState({
                success: nextProps.songs.success,
                isLoading: nextProps.songs.isLoading,
                nextLink: nextProps.songs.nextLink,
            });
        }
    }

    songsCard(song) {
        return (
            <div className="row__cell" key={song.id} style={{ margin: '7px' }}>
                <div className="songs-body-card">
                    <div className="songs-body-card__inner">
                        <div className="songs-body-card__artwork" style={{ backgroundImage: `url(${song.artwork_url})` }}>
                            <div className="artwork-play " role="button" ><i className="artwork-play__icon ion-ios-play"></i></div>
                        </div>
                        <div className="songs-body-card__main">
                            <div className="songs-body-card__avatar" style={{ backgroundImage: `url(${song.user.avatar_url})` }}></div>
                            <div className="songs-body-card__details">
                                <a className="songs-body-card__title" href="#" title={song.title ? song.title : ''}>{song.title ? song.title : ''}</a>
                                <a className="songs-body-card__username" href="#" title={song.title ? song.title : ''}>{song.title ? song.title : ''}</a>
                            </div>
                        </div>
                        <div className="popover heart songs-body-card__heart popover--right">
                            <span className="popover__trigger" role="button">
                                <div className="heart__inner"><i className="heart__icon ion-ios-heart"></i></div>
                            </span>
                        </div>
                    </div>
                    <div className="songs-body-card__mobile-events" role="button"></div>
                </div>
            </div>

        )
    }

    songsList() {
        let { songs } = this.state;
        return songs && songs.length > 0 ?
            songs.map((song, key) => { return (this.songsCard(song)) }) : 'No songs found.';
    }

    render() {
        let { isLoading, success } = this.state;
        return (
            <div className="container">
                <div className="songs-body">
                    {success &&
                        <div >
                            <div className="row">
                                {this.songsList()}
                            </div>
                        </div>
                    }
                </div>
                {isLoading && spinnerLoader()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state;
};
export default connect(mapStateToProps)(Songs);