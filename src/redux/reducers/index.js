import { combineReducers } from "redux";

import ads from './ads'
import currentAd from './currentAd';
import user from "./user";

export default combineReducers ({
    ads,
    currentAd,
    user
});
