import * as actionTypes from './actionTypes';
// immutable库 --> immutable对象 不可改变的
// fromJS方法，可以把一个js对象转化为一个immutable对象
import { fromJS } from 'immutable';

const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    list: [],
    page: 1,
    totalPage: 1
});
// const defaultState = {
//     focused: false
// };

//导出一个纯函数
export default (state = defaultState,action) =>{
    // if (action.type === actionTypes.SEARCH_FOCUS) {
    //     /*由于已经是immutable对象，这样写是不对的
    //     return {
    //         focused: true
    //     }*/

    //     // immutable对象的set方法，会结合之前immutable对象的值和设置的值，返回一个全新的对象，因此没有对之前的数据进行修改
    //     return state.set('focused', true);
    // }
    // if (action.type === actionTypes.SEARCH_BLUR) {
    //     // return {
    //     //     focused: false
    //     // }
    //     return state.set('focused',false);
    // }
    // if(action.type === actionTypes.CHANGE_LIST) {
    //     return state.set('list',action.data);
    // }
    // return state;

    switch(action.type){
        //没有break 是因为已经return出去了 后面就不会执行了
        case actionTypes.SEARCH_FOCUS:
            return state.set('focused', true);
        case actionTypes.SEARCH_BLUR:
            return state.set('focused',false);
        case actionTypes.CHANGE_LIST:
            // return state.set('list',action.data).set('totalPage',action.totalPage);
            // merge多次调用set 性能更高
            return state.merge({
                list: action.data,
                totalPage: action.totalPage
            })
        case actionTypes.MOUSE_ENTER:
            return state.set('mouseIn',true);
        case actionTypes.MOUSE_LEAVE:
            return state.set('mouseIn',false);
        case actionTypes.CHANGE_PAGE:
            return state.set('page',action.page);
        default:
            return state;
    }
}