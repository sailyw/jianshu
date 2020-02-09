// immutable库 --> immutable对象 不可改变的
// fromJS方法，可以把一个js对象转化为一个immutable对象
import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
    login: false
});



//导出一个纯函数
export default (state = defaultState,action) =>{ 
    switch(action.type){
        case actionTypes.CHANGE_LOGIN:
            return state.set('login',action.value);
        case actionTypes.CHANGE_LOGOUT:
            return state.set('login',action.value);
        default:
            return state;
    }
}