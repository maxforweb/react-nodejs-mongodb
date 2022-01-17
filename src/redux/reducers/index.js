import { combineReducers } from "redux";

import ads from './ads'
import currentAd from './currentAd';
import user from "./user";
import calendarNotes from "./calendarNotes";

export default combineReducers ({
    ads,
    currentAd,
    user,
    calendarNotes
});
