'use strict';

import * as types from '../constants';
import { API } from '../utils/API';

/**
 * fetching songs api call
 */
export function fetchSongLyrics(songSlug) {
    return dispatch =>
        API.getSongs(`${process.env.API_ENDPOINT}songs`)
            .then(json => dispatch(fetchSongSuccess(json)))
            .catch(err => dispatch(fetchSongFailure(err)));
}

function fetchSongSuccess(json) {
    let response = {
        isLoading: false,
        nextLink: null,
        success: true,
        songs: [],
    };

    return {
        state: response,
        type: types.FETCH_SONG_SUCCESS,
    };
}

function fetchSongFailure(err) {
    let response = {
        isLoading: false,
        nextLink: null,
        success: false,
        error: err
    };

    return {
        state: response,
        type: types.FETCH_SONG_FAILURE,
    };
}

