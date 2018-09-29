'use strict';

import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSongLyrics } from "../../actions/SongActions";
import { spinnerLoader } from "../common";

class Songs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            success: false,
            songs: [],
            nextLink: null,
            limit: 50,
            linkedPartitioning: 1
        }
    }

    componentDidMount() {
        let { limit, linkedPartitioning } = this.state;
        let { dispatch } = this.props;
        dispatch(fetchSongLyrics(limit, linkedPartitioning));
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
    }

    songsList() {
        let { songs } = this.state;

        return songs && songs.length > 0 ?
            songs.map((song, key) => {
                return (
                    <div className="row__cell" key={key}>
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
            }) : 'No songs found.';
    }

    render() {
        let { songs, isLoading, success } = this.state;
        console.log('songs', songs)
        return (
            <div className="container">
                <div className="songs-body">
                    {success && isLoading === false &&
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