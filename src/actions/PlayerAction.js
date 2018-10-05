import * as types from '../constants';


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

export const playSong = (playlist, playingIndex) => ({
    type: types.PLAY_SONG,
    playlist,
    playingIndex,
});


export const toggleRepeat = () => ({ type: types.TOGGLE_REPEAT });

export const toggleShuffle = () => ({ type: types.TOGGLE_SHUFFLE });
