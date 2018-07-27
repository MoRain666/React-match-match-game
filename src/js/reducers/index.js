import { combineReducers } from 'redux';
import cards from './cards';
import score from './score';

const matchMatchGame = combineReducers({
    cards,
    score
});
export default matchMatchGame;