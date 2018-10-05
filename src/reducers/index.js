'use strict';

import { combineReducers } from "redux";
import songs from './SongsList';
import player from './Player';

const reducer = combineReducers({
    songs,
    player,
});

export default reducer;