import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Topic from './components/Topic';
import List from './components/List';
import Recommand from './components/Recommand';
import Writer from './components/Writer';
import { actionCreators } from './store';
import { 
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './style';

// PureComponent内部自带了一个shouldComponentsUpdate
// 那是因为我们使用的immutable
class Home extends PureComponent{

    handleScrollTop() {
        window.scrollTo(0,0);
    }

    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' alt='' src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommand />
                    <Writer />
                </HomeRight>
                { this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null}
            </HomeWrapper>
        )
    }

    componentDidMount() {
        this.props.changeHomeData();
        this.bindEvents();
    }

    componentWillUnmount() {
		window.removeEventListener('scroll', this.props.changeScrollTopShow);
	}

	bindEvents() {
		window.addEventListener('scroll', this.props.changeScrollTopShow);
	}

}

const mapStateToProps = (state) => ({
    showScroll: state.getIn(['home','showScroll'])
})

const mapDispatchToProps = (dispatch) =>({
    changeHomeData() {
        // const action = actionCreators.getHomeInfo();
        // dispatch(action);
        dispatch(actionCreators.getHomeInfo());
    },
    changeScrollTopShow(){
        if(document.documentElement.scrollTop > 100) {
            dispatch(actionCreators.toggleToShow(true));
        }else{
            dispatch(actionCreators.toggleToShow(false));
        }
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Home);