'use strict';

import * as type from "../constants";
const initialState = {
    isLoading: false,
    nextLink: null,
    success: true,
    songs: [],
};

const songs = (state = initialState, action) => {
    switch (action.type) {
        case type.FETCH_SONG:
            return {
                ...state,
                songs: action.state.songs
            };
        default:
            return state;
    }
};
export default songs;