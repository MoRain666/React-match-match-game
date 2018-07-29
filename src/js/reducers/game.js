import { SET_NEW_TIME, SET_TIME, SHIRTS_INIT } from './../actions/index';

export default (state = {} , action) => {
    switch (action.type) {
        case SET_NEW_TIME:
            const newObj = {...state};
            newObj.currentTime = action.currentTime + 1;
            return newObj;
        case SET_TIME:
            const newObg = {...state};
            newObg.currentTime = 0;
            return newObg;
        case SHIRTS_INIT:
            const newObgWidthShirts = {...state};
            const arrayOfShirts = [];
            for(let i = 0; i < action.payload; i++){
                arrayOfShirts.push(`shirt_${i + 1}.png`);
                arrayOfShirts.push(`shirt_${i + 1}.png`);
            }
            arrayOfShirts.sort((a, b) => 0.5 - Math.random())
            newObgWidthShirts.shirts = arrayOfShirts;
            return newObgWidthShirts;
        default:
            return state;
    }
}