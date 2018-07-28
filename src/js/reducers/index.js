import { combineReducers } from 'redux';
import cards from './cards';
import score from './score';
import requisites from './requisites';

const matchMatchGame = combineReducers({
    cards,
    score,
    requisites
});
export default matchMatchGame;