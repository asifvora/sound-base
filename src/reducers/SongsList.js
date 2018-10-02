'use strict';

import * as type from "../constants";

const initialState = {
    success: false,
    isLoading: true,
    nextLink: false,
    songs: [],
};

const SongsList = (state = initialState, action) => {
    switch (action.type) {
        case type.FETCH_SONG_SUCCESS:
            return {
                ...state,
                success: action.state.success,
                isLoading: action.state.isLoading,
                nextLink: action.state.nextLink,
                songs: action.state.songs,
            };
        case type.FETCH_SONG_FAILURE:
            return {
                ...state,
                success: action.state.success,
                isLoading: action.state.isLoading,
                nextLink: action.state.nextLink,
                error: action.state.error,
            };
        case type.FETCH_MORE_SONG_SUCCESS:
            return {
                ...state,
                success: action.state.success,
                isLoading: action.state.isLoading,
                nextLink: action.state.nextLink,
                songs: action.state.songs,
            };
        case type.FETCH_MORE_SONG_FAILURE:
            return {
                ...state,
                success: action.state.success,
                isLoading: action.state.isLoading,
                nextLink: action.state.nextLink,
                error: action.state.error,
            };
        default:
            return state;
    }
};
export default SongsList;