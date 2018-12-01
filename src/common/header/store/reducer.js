import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    collapsed: false,
});



export default (state = defaultState, action) => {
    //console.log(acton);
    //console.log(acton.defaultSelectedKeys);
    switch(action.type) {
        case constants.LEFT_SIDE_TOGGLE_COLLAPSEDE:
            //console.log(state);
            const collapsed = state.get('collapsed');
            return state.set('collapsed', !collapsed);
            
       default:
            return state;
    }   
    
}