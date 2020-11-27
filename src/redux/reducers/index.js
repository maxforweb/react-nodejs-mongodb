import { combineReducers } from "redux";

import ads from './ads'
import currentAd from './currentAd';

export default combineReducers ({
    ads,
    currentAd
});
