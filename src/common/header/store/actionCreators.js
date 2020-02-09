import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';
import axios from 'axios';

// 是个函数，返回的是一个对象
// 自己用的
const changeList = (data) => ({
    type: actionTypes.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
});

// 导出给别人用的
export const searchFocus = () => ({
    type: actionTypes.SEARCH_FOCUS
});

export const searchBlur = () => ({
    type: actionTypes.SEARCH_BLUR
});

export const mouseEnter = () => ({
    type: actionTypes.MOUSE_ENTER
});

export const mouseLeave = () => ({
    type: actionTypes.MOUSE_LEAVE
});

export const changePage = (page) => ({
    type: actionTypes.CHANGE_PAGE,
    page
});


// 使用了redux-thunk 可以返回一个函数
export const getList =() => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            const data = res.data;
            dispatch(changeList(data.data));
        }).catch(() => {
            console.log('error');
        })
    }
}