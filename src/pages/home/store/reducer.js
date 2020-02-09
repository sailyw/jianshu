// immutable库 --> immutable对象 不可改变的
// fromJS方法，可以把一个js对象转化为一个immutable对象
import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    // 默认加载第1页
    articlePage: 1,
    showScroll: false    
});

const changeHomeData = (state,action) =>{
    return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList)
    });
}

const addArticleList = (state,action) => {
    return state.merge({
        'articleList':state.get('articleList').concat(action.list),
        'articlePage': action.nextPage
    });
}
//导出一个纯函数
export default (state = defaultState,action) =>{ 
    switch(action.type){
        case actionTypes.CHANGE_HOME_DATA:
            return changeHomeData(state,action);
        case actionTypes.ADD_Article_LIST:
            return addArticleList(state,action);
        case actionTypes.TOGGLE_SCROLL_TOP:
            return state.set('showScroll',action.show);
        default:
            return state;
    }
}