'use strict';

import { combineReducers } from "redux";
import songs from './Songs';

const reducer = combineReducers({
    songs
});

export default reducer;