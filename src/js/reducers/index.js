import { combineReducers } from 'redux';
import cards from './cards';
import score from './score';
import requisites from './requisites';
import settings from './settings';

const matchMatchGame = combineReducers({
    cards,
    score,
    requisites,
    settings
});
export default matchMatchGame;