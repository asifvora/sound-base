import * as types from '../constants';
import { getPlayingIndex, getPlaylists, getPrevIndex, getNextIndex } from '../selectors/PlayerSelectors';


/**
 * playSongRequest
 */
export const playSongRequest = (data) => ({ type: types.IS_PLAY_SONG_REQUEST, state: data });

export const onLoadedMetadata = duration => ({
    type: types.ON_LOADED_METADATA,
    duration,
});

export const onLoadStart = () => ({
    type: types.ON_LOAD_START,
});

export const onPause = () => ({
    type: types.ON_PAUSE,
});

export const onPlay = () => ({
    type: types.ON_PLAY,
});

export const onTimeUpdate = currentTime => ({
    type: types.ON_TIME_UPDATE,
    currentTime,
});

export const onVolumeChange = (muted, volume) => ({
    type: types.ON_VOLUME_CHANGE,
    muted,
    volume,
});

export const playSong = (isPlaying, song, playingIndex) => ({
    type: types.PLAY_SONG,
    isPlaying,
    song,
    playingIndex,
});

export const playPrevSong = () => (dispatch, getState) => {
    const state = getState();
    const playlist = getPlaylists(state);
    const prevIndex = getPrevIndex(state);

    if (prevIndex !== null) {
        dispatch(playSong(true, playlist[prevIndex], prevIndex));
    }
};

export const playNextSong = () => (dispatch, getState) => {
    const state = getState();
    const playlist = getPlaylists(state);
    const nextIndex = getNextIndex(state);

    if (nextIndex !== 0) {
        dispatch(playSong(true, playlist[nextIndex], nextIndex));
    }
};

// export const toggleRepeat = () => ({ type: types.TOGGLE_REPEAT });

// export const toggleShuffle = () => ({ type: types.TOGGLE_SHUFFLE });
