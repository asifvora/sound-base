'use strict';

import * as types from "../constants";

const initialState = {
    isActive: false,
    song: {},
    currentTime: 0,
    duration: 0,
    isPlaying: false,
    muted: false,
    repeat: false,
    shuffle: false,
    volume: 1,
    playingIndex: null,
    playlist: null,
};

const Player = (state = initialState, action) => {

    switch (action.type) {
        case types.IS_PLAY_SONG_REQUEST:
            return {
                ...state,
                isActive: action.state.isActive,
                isPlaying: action.state.isPlaying,
                song: action.state.song,
            };
        case types.ON_LOAD_START:
            return {
                ...state,
                currentTime: 0,
                duration: 0,
            };

        case types.ON_LOADED_METADATA:
            return {
                ...state,
                duration: action.duration,
            };

        case types.ON_PAUSE:
            return {
                ...state,
                isPlaying: false,
            };

        case types.ON_PLAY:
            return {
                ...state,
                isPlaying: true,
            };

        case types.ON_TIME_UPDATE:
            return {
                ...state,
                currentTime: action.currentTime,
            };

        case types.ON_VOLUME_CHANGE:
            return {
                ...state,
                muted: action.muted,
                volume: action.volume,
            };

        case types.PLAY_SONG:
            return {
                ...state,
                playingIndex: action.playingIndex,
                playlist: action.playlist,
            };

        case types.TOGGLE_REPEAT:
            return { ...state, repeat: !state.repeat };

        case types.TOGGLE_SHUFFLE:
            return { ...state, shuffle: !state.shuffle };

        default:
            return state;
    }
};
export default Player;