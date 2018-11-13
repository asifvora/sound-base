'use strict';

import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMoreSongs, fetchSearchSongs } from "../../actions/SongActions";
import { playSongRequest } from "../../actions/PlayerAction";
import { onPause, onPlay } from "../../actions/PlayerAction";
import { spinnerLoader, noRecordFound } from "../common";

class Search extends Component {

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
        let { match: { params: { query } } } = this.props;
        let { dispatch } = this.props;
        dispatch(fetchSearchSongs(limit, linkedPartitioning, query));
        window.addEventListener('scroll', this.handleScroll);
    }

    playSongRequest(song, isActive, isActiveId, isPlaying, playingIndex) {
        let isPlayCheck = isActive && isActiveId === song.id ? !isPlaying : true;
        let { dispatch } = this.props;
        dispatch(playSongRequest({ isActive: true, isPlaying: isPlayCheck, song: song, playingIndex: playingIndex }));
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        let { nextLink } = this.state;
        const { dispatch } = this.props;
        this.setState({ isLoading: true }, () => {
            if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 200)) {
                if (this.state.nextLink !== false) {
                    dispatch(fetchMoreSongs(nextLink));
                    this.setState({ nextLink: false, isFetching: false });
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
        if (nextProps.songs.success === false) {
            this.setState({
                success: nextProps.songs.success,
                isLoading: nextProps.songs.isLoading,
                nextLink: nextProps.songs.nextLink,
            });
        }
    }

    onPlay() {
        let { dispatch } = this.props;
        dispatch(onPlay());
    }

    onPause() {
        let { dispatch } = this.props;
        dispatch(onPause());
    }

    togglePlay(isPlaying) {
        const audioElement = document.getElementById('audio');
        if (isPlaying) {
            this.onPause();
            audioElement.pause();
        } else {
            this.onPlay();
            audioElement.play();
        }
    }

    songsCard(song, key, isActive, isActiveId, isPlaying) {
        return (
            <div className="row__cell" key={key} style={{ margin: '7px' }} onClick={() => (isActive && isActiveId === song.id ? this.togglePlay(isPlaying) : this.playSongRequest(song, isActive, isActiveId, isPlaying, key))}>
                <div className={isActive && isActiveId === song.id ? `songs-body-card songs-body-card--active` : `songs-body-card`} >
                    <div className="songs-body-card__inner">
                        <div className="songs-body-card__artwork" style={{ backgroundImage: song.artwork_url ? `url(${song.artwork_url})` : `` }}>
                            <div className={isActive && isActiveId === song.id ? `artwork-play artwork-play--active` : `artwork-play `} role="button" ><i className={isActive && isActiveId === song.id && isPlaying ? `artwork-play__icon ion-radio-waves` : `artwork-play__icon ion-ios-play`}  ></i></div>
                        </div>
                        <div className="songs-body-card__main">
                            <div className="songs-body-card__avatar" style={{ backgroundImage: `url(${song.user.avatar_url})` }}></div>
                            <div className="songs-body-card__details">
                                <a className="songs-body-card__title" href="#" title={song.title ? song.title : ''}>{song.title ? song.title : ''}</a>
                                <a className="songs-body-card__username" href="#" title={song.user.username ? song.user.username : ''}>{song.user.username ? song.user.username : ''}</a>
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
        let { player: { isActive, isPlaying, song: { id } } } = this.props;
        let { songs } = this.state;
        return songs && songs.length > 0 ?
            songs.map((song, key) => { return (this.songsCard(song, key, isActive, id, isPlaying)) }) : noRecordFound('No songs found.');
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
export default connect(mapStateToProps)(Search);