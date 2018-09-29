'use strict';

import React, { Component } from "react";

class Player extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <audio id="audio" src="https://api.soundcloud.com/tracks/203407143/stream?client_id=a281614d7f34dc30b665dfcaa3ed7505"></audio>
                <div className="player">
                    <div className="player__inner container">
                        <div className="player__section player__section--song">
                            <div className="player__song">
                                <div className="player__song__artwork" style={{ backgroundImage: 'url(https://i1.sndcdn.com/artworks-000100709675-aebru6-t300x300.jpg)' }}></div>
                                <div className="player__song__main"><a className="player__song__title" href="https://soundredux.io/#/songs/203407143"
                                    title="">Bezubaan Piku 2015 (official)</a><a className="player__song__username" href="https://soundredux.io/#/users/149149659"
                                        title="">bollywood latest songs ✔️</a></div>
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
                            <div className="slider " role="button">
                                <div className="slider__bar">
                                    <div className="slider__bar__fill" style={{ width: '10.6825%' }}>
                                        <div className="slider__handle" role="button" ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="player__section player__section--time">
                            <div className="player__time">
                                00:36
                  <div className="player__time__separator">/</div>
                                05:37
                </div>
                        </div>
                        <div className="player__section player__section--options">
                            <div className="player__buttons player__buttons--options">
                                <div className="player__button " role="button" ><i className="player__button__icon ion-loop"></i></div>
                                <div className="player__button " role="button" ><i className="player__button__icon ion-shuffle"></i></div>
                                <div className="player__button " role="button"><i className="player__button__icon ion-android-list"></i></div>
                                <div className="player__button player__button--volume" role="button" ><i className="player__button__icon ion-android-volume-mute"></i><i
                                    className="player__button__icon player__button__icon--absolute ion-android-volume-down"></i></div>
                            </div>
                        </div>
                        <div className="player__section player__section--volume">
                            <div className="slider " role="button" >
                                <div className="slider__bar">
                                    <div className="slider__bar__fill" style={{ width: '22%' }}>
                                        <div className="slider__handle" role="button"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Player;