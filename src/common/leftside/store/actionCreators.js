import { fromJS } from 'immutable';
import axios from "axios";
import * as constants from './constants';


const changeLeftMenu = (result) => {
    return  {
        type: constants.LEFT_SIDE_CHANGE_LEFT_MENU,
        defaultSelectedKeys: result.get('defaultSelectedKeys'),
        defaultOpenKeys: result.get('defaultOpenKeys'),
        submeus: result.get('submeus')
    }
}


export const getLeftMenu = () => {
    return (dispatch) => {
        axios.get('/api/leftmenu.json').then((res) => {
            //const result =  fromJS(res.data.data);
            const result =  fromJS(res.data.data);
            
            dispatch(changeLeftMenu(result));
        });
    }
}