import { combineReducers } from 'redux-immutable';
import { reducer as asideReducer } from '../common/leftside/store';
import { reducer as headerReducer } from '../common/header/store';

const reducer = combineReducers({
    aside: asideReducer,
    header: headerReducer
});


export default reducer;