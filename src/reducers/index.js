'use strict';

import { combineReducers } from "redux";
import songs from './SongsList';
import activeSong from './ActiveSong';

const reducer = combineReducers({
    songs,
    activeSong
});

export default reducer;