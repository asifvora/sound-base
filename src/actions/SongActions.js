'use strict';

import * as types from '../constants';
import { API } from '../utils/API';

/**
 * fetching songs api call
 */
export function fetchSongs(limit, linkedPartitioning) {
    return dispatch =>
        API.getSongs(`${types.BASE_URL}tracks?client_id=${types.CLIENT_ID}&limit=${limit}&linked_partitioning=${linkedPartitioning}&offset=1&tags=bollywood`)
            .then(json => dispatch(fetchSongSuccess(json)))
            .catch(err => dispatch(fetchSongFailure(err)));
}

function fetchSongSuccess({ collection = [], next_href = false }) {
    let response = {
        success: true,
        isLoading: false,
        nextLink: next_href ? next_href : false,
        songs: collection ? collection : [],
    };

    return {
        state: response,
        type: types.FETCH_SONG_SUCCESS,
    };
}

function fetchSongFailure(err) {
    let response = {
        success: false,
        isLoading: false,
        nextLink: false,
        error: err
    };

    return {
        state: response,
        type: types.FETCH_SONG_FAILURE,
    };
}

/**
 * fetching more songs api call
 */
export function fetchMoreSongs(nextLink) {
    return (dispatch, getState) => {
        const { songs: { songs } } = getState();
        API.getSongs(nextLink)
            .then(json => dispatch(fetchMoreSongSuccess(songs, json)))
            .catch(err => dispatch(fetchMoreSongFailure(err)));
    }

}

function fetchMoreSongSuccess(songs, json) {
    let { collection = [], next_href = false } = json;
    let response = {
        success: true,
        isLoading: false,
        nextLink: next_href ? next_href : false,
        songs: collection ? [...songs, ...collection] : songs,
    };
    return {
        state: response,
        type: types.FETCH_MORE_SONG_SUCCESS,
    };
}

function fetchMoreSongFailure(err) {
    let response = {
        success: false,
        isLoading: false,
        nextLink: false,
        error: err
    };

    return {
        state: response,
        type: types.FETCH_MORE_SONG_FAILURE,
    };
}


/**
 * fetching search songs api call
 */
export function fetchSearchSongs(limit, linkedPartitioning, query) {
    return dispatch =>
        API.getSongs(`${types.BASE_URL}tracks?client_id=${types.CLIENT_ID}&limit=${limit}&linked_partitioning=${linkedPartitioning}&offset=1&tags=bollywood&q=${query}`)
            .then(json => dispatch(fetchSongSuccess(json)))
            .catch(err => dispatch(fetchSongFailure(err)));
}