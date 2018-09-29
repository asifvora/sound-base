'use strict';

import * as type from "../constants";

const initialState = {
    isActive: false,
    song: {},
};

const ActiveSong = (state = initialState, action) => {

    switch (action.type) {
        case type.IS_PLAY_SONG_REQUEST:
            return {
                ...state,
                isActive: action.state.isActive,
                song: action.state.song,
            };
        default:
            return state;
    }
};
export default ActiveSong;