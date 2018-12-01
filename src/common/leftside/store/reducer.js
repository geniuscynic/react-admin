import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
        defaultSelectedKeys: [],
        defaultOpenKeys: [],
        submeus: []
});


const changeLeftMenu = (state, action) => {
    return state.merge({
        defaultSelectedKeys: action.defaultSelectedKeys,
        defaultOpenKeys: action.defaultOpenKeys,
        submeus: action.submeus
    });
}


export default (state = defaultState, action) => {
    //console.log(acton);
    //console.log(acton.defaultSelectedKeys);
    switch(action.type) {
        case constants.LEFT_SIDE_CHANGE_LEFT_MENU:
            return changeLeftMenu(state, action);

       default:
            return state;
    }   
    
}