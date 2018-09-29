'use strict';

import { combineReducers } from "redux";
import songs from './Songs';
import activeSong from './ActiveSong';

const reducer = combineReducers({
    songs,
    activeSong
});

export default reducer;