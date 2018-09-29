'use strict';

import * as type from "../constants";

const initialState = {
    success: false,
    isLoading: true,
    nextLink: false,
    songs: [],
};

const songs = (state = initialState, action) => {

    switch (action.type) {
        case type.FETCH_SONG_SUCCESS:
            return {
                ...state,
                success: action.state.success,
                isLoading: action.state.isLoading,
                nextLink: action.state.nextLink,
                songs: action.state.songs,
            };
        default:
            return state;
    }
};
export default songs;