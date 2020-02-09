// immutable库 --> immutable对象 不可改变的
// fromJS方法，可以把一个js对象转化为一个immutable对象
import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
      title: '',
      content: '' 
});


//导出一个纯函数
export default (state = defaultState,action) =>{ 
    switch(action.type){
        case actionTypes.CHANGE_DETAIL:
            return state.merge({
                title: action.title,
                content: action.content
            })
        default:
            return state;
    }
}