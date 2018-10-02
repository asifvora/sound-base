'use strict';

import React, { Component } from "react";
import { connect } from "react-redux";
import { Slider } from '../Slider';
import * as types from '../../constants';
import { formatSeconds } from '../../utils/NumberUtils';
import volumeClassName from '../../utils/PlayerUtils';

class Player extends Component {

    constructor(props) {
        super(props);
        this.state = {
            volume: 0,
            currentTime: 0,
            muted: false,
        }
        this.audioElement = null;
        this.onEnded = this.onEnded.bind(this);
        this.onLoadedMetadata = this.onLoadedMetadata.bind(this);
        this.onLoadStart = this.onLoadStart.bind(this);
        this.onPause = this.onPause.bind(this);
        this.onPlay = this.onPlay.bind(this);
        this.onTimeUpdate = this.onTimeUpdate.bind(this);
        this.onVolumeChange = this.onVolumeChange.bind(this);
        this.changeCurrentTime = this.changeCurrentTime.bind(this);
        this.changeVolume = this.changeVolume.bind(this);
        this.toggleMuted = this.toggleMuted.bind(this);
        this.togglePlay = this.togglePlay.bind(this);
    }

    componentDidMount() {
        const { audioElement } = this;
        audioElement && audioElement.play();
    }

    componentDidUpdate(prevProps) {
        const { audioElement, props } = this;
        const { audioUrl } = props;
        if (prevProps.audioUrl !== audioUrl) {
            audioElement && audioElement.play();
        }
    }

    onEnded() {
        // const { playNextSong } = this.props;
        // playNextSong();
    }

    onLoadedMetadata() {
        // const { audioElement, props } = this;
        // const { onLoadedMetadata } = props;
        // onLoadedMetadata(Math.floor(audioElement.duration));
    }

    onLoadStart() {
        // const { onLoadStart } = this.props;
        // onLoadStart();
    }

    onPlay() {
        // const { onPlay } = this.props;
        // onPlay();
    }

    onPause() {
        // const { onPause } = this.props;
        // onPause();
    }

    onTimeUpdate() {
        // const { audioElement, props } = this;
        // const { onTimeUpdate } = props;
        // onTimeUpdate(Math.floor(audioElement.currentTime));
    }

    onVolumeChange() {
        // const { audioElement, props } = this;
        // const { muted, volume } = audioElement;
        // const { onVolumeChange } = props;
        // onVolumeChange(muted, volume);
    }

    changeCurrentTime(currentTime) {
        this.setState({ currentTime })
        this.audioElement.currentTime = currentTime;
    }

    changeVolume(volume) {
        const { audioElement } = this;
        this.setState({ volume: volume })
        audioElement.muted = false;
        audioElement.volume = volume;
    }

    toggleMuted() {
        const { audioElement } = this;
        const { muted } = audioElement;
        this.setState({ muted: !muted })
        audioElement.muted = !muted;
    }

    togglePlay() {
        const { audioElement } = this;
        if (audioElement.paused) {
            audioElement.play();
        } else {
            audioElement.pause();
        }
    }

    playerShow() {
        let { volume, currentTime, muted } = this.state;
        let { activeSong: { isActive, isPlay, song: { id, title, stream_url, artwork_url, duration, user: { username } } } } = this.props;
        return (
            <div>
                <audio
                    id="audio"
                    onEnded={this.onEnded}
                    onLoadedMetadata={this.onLoadedMetadata}
                    onLoadStart={this.onLoadStart}
                    onPause={this.onPause}
                    onPlay={this.onPlay}
                    onTimeUpdate={this.onTimeUpdate}
                    onVolumeChange={this.onVolumeChange}
                    ref={(node) => { this.audioElement = node; }}
                    src={`${stream_url}?client_id=${types.CLIENT_ID}`}
                />
                <div className="player">
                    <div className="player__inner container">
                        <div className="player__section player__section--song">
                            <div className="player__song">
                                <div className="player__song__artwork" style={{ backgroundImage: `url(${artwork_url})` }}></div>
                                <div className="player__song__main">
                                    <a className="player__song__title" href="#" title={title}>{title}</a>
                                    <a className="player__song__username" href="#" title={username}>{username}</a>
                                </div>
                            </div>
                        </div>
                        <div className="player__section">
                            <div className="player__buttons">
                                <div className="player__button" role="button" ><i className="player__button__icon ion-ios-rewind"></i></div>
                                <div className="player__button" role="button" ><i className="player__button__icon ion-ios-pause"></i></div>
                                <div className="player__button" role="button"><i className="player__button__icon ion-ios-fastforward"></i></div>
                            </div>
                        </div>
                        <div className="player__section player__section--seek">
                            <Slider
                                max={duration}
                                onChange={(this.changeCurrentTime)}
                                value={currentTime}
                            />
                        </div>
                        <div className="player__section player__section--time">
                            <div className="player__time">
                                {formatSeconds(currentTime)}
                                <div className="player__time__separator">/</div>
                                {formatSeconds(duration)}
                            </div>
                        </div>
                        <div className="player__section player__section--options">
                            <div className="player__buttons player__buttons--options">
                                <div className="player__button " role="button" ><i className="player__button__icon ion-loop"></i></div>
                                <div className="player__button " role="button" ><i className="player__button__icon ion-shuffle"></i></div>
                                <div className="player__button " role="button"><i className="player__button__icon ion-android-list"></i></div>
                                <div
                                    className="player__button player__button--volume"
                                    onClick={this.toggleMuted}
                                    role="button"
                                    tabIndex="0"
                                >
                                    <i className={`player__button__icon ion-android-volume-${muted ? 'off' : 'mute'}`} />
                                    <i className={`player__button__icon player__button__icon--absolute ${volumeClassName(volume)}`} />
                                </div>
                            </div>
                        </div>
                        <div className="player__section player__section--volume">
                            <Slider
                                max={1}
                                onChange={this.changeVolume}
                                value={volume}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        let { activeSong: { isActive } } = this.props;
        return (
            isActive ? this.playerShow() : null
        );
    }
}

const mapStateToProps = state => {
    return state;
};
export default connect(mapStateToProps)(Player);