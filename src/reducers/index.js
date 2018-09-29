'use strict';

import { combineReducers } from "redux";
import songs from './songs';

const reducer = combineReducers({
    songs
});

export default reducer;