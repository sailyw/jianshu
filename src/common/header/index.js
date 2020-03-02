import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { GlobalStyled } from '../../statics/iconfont/iconfont';
import { CSSTransition } from 'react-transition-group';

// import * as actionCreators from './store/actionCreators';
import { actionCreators } from './store';
import { actionCreators as loginActionCreators } from '../../pages/login/store';
import {
	HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
	Button,
	SearchWrapper,
	SearchInfo,
	SearchInfoTitle,
	SearchInfoSwitch,
	SearchInfoItem,
	SearchInfoList
} from './style';

class Header extends Component {

	getListArea() {
		const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
		const newList = list.toJS();
		const pageList = [];

		if (newList.length) {
			for(let i = (page-1) * 10; i < page * 10; i++) {
				pageList.push(
					<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
				)
			}
		}
		
		if(focused || mouseIn) {
			return (
				<SearchInfo 
					onMouseEnter = {handleMouseEnter}
					onMouseLeave = {handleMouseLeave}
				>
					<SearchInfoTitle>
						热门搜索
						<SearchInfoSwitch 
							onClick={() => handleChangePage(page,totalPage,this.spinIcon)}
						>
							<span ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</span>
							换一批
						</SearchInfoSwitch>
					</SearchInfoTitle>
					<SearchInfoList>
						{/* {
							list.map((item) => {
								return <SearchInfoItem key={item[i]}>{item[i]}</SearchInfoItem>
							})
						} */}
						{pageList}
					</SearchInfoList>
				</SearchInfo>
			)
		}
		else {
			return null;
		}
	}
	render() {
		const { focused, handleInputFocus, handleInputBlur, list, login, logout } = this.props;
		return (
			<HeaderWrapper>
				<GlobalStyled />
				{/* <Logo href='/'/> */}
				<Link to='/'>
					<Logo />
				</Link>
				<Nav>
					<NavItem className='left active'>首页</NavItem>
					<NavItem className='left'>下载App</NavItem>
					{
						login ? 
							<NavItem onClick={logout} className='right'>退出</NavItem> : 
							<Link to ='/login'><NavItem className='right'>登录</NavItem></Link>
					}
					<NavItem className='right'>
						<span className="iconfont">&#xe636;</span>
					</NavItem>
					<SearchWrapper>
						<CSSTransition
							in={focused}
							timeout={200}
							classNames="slide"
						>
							<NavSearch
								className={focused ? 'focused':''}
								onFocus={() => handleInputFocus(list)}
								onBlur={handleInputBlur}
							></NavSearch>
						</CSSTransition>
						<span className={focused ? 'focused iconfont zoom':'iconfont zoom'}>&#xe6e4;</span>
						{this.getListArea()}
					</SearchWrapper>
				</Nav>
	
				<Addition>
					<Link to ='/write'>
						<Button className='writing'>
							<span className="iconfont">&#xe6e5;</span>
							写文章
						</Button>
					</Link>
					<Button className='reg'>注册</Button>
				</Addition>
			</HeaderWrapper>
		)
	}
}
// const getListArea = (show) => {
// 	if(show) {
// 		return (
// 			<SearchInfo>
// 				<SearchInfoTitle>
// 					热门搜索
// 					<SearchInfoSwitch>换一批</SearchInfoSwitch>
// 				</SearchInfoTitle>
// 				<SearchInfoList>
// 					<SearchInfoItem>教育</SearchInfoItem>
// 					<SearchInfoItem>教育</SearchInfoItem>
// 					<SearchInfoItem>教育</SearchInfoItem>
// 					<SearchInfoItem>教育</SearchInfoItem>
// 					<SearchInfoItem>教育</SearchInfoItem>
// 					<SearchInfoItem>教育</SearchInfoItem>
// 					<SearchInfoItem>教育</SearchInfoItem>
// 				</SearchInfoList>
// 			</SearchInfo>
// 		)
// 	}
// 	else {
// 		return null;
// 	}
// }

// const Header = (props) => {
// 	return (
// 		<HeaderWrapper>
// 		  	<GlobalStyled />
// 				{/* <Logo href='/'/> */}
// 		  		<Logo />
// 		  		<Nav>
// 					<NavItem className='left active'>首页</NavItem>
// 					<NavItem className='left'>下载App</NavItem>
// 					<NavItem className='right'>登录</NavItem>
// 					<NavItem className='right'>
// 						<span className="iconfont">&#xe636;</span>
// 					</NavItem>
// 					<SearchWrapper>
// 						<CSSTransition
// 							in={props.focused}
// 							timeout={200}
// 							classNames="slide"
// 						>
// 							<NavSearch
// 								className={props.focused ? 'focused':''}
// 								onFocus={props.handleInputFocus}
// 								onBlur={props.handleInputBlur}
// 							></NavSearch>
// 						</CSSTransition>
// 						<span className={props.focused ? 'focused iconfont':'iconfont'}>&#xe6e4;</span>
// 						{getListArea(props.focused)}
// 					</SearchWrapper>
// 		  		</Nav>

// 		  		<Addition>
// 					<Button className='writing'>
// 						<span className="iconfont">&#xe6e5;</span>
// 						写文章
// 					</Button>
// 					<Button className='reg'>注册</Button>
// 				</Addition>
// 	   	</HeaderWrapper>
//   	)
// }

// 只有一个render() 成为了一个无状态函数
// class Header extends Component {

// 	// constructor(props){
// 	// 	super(props);
// 	// 	// this.state=({
// 	// 	// 	focused: false
// 	// 	// })
// 	// 	this.handleInputFocus=this.handleInputFocus.bind(this);
// 	// 	this.handleInputBlur=this.handleInputBlur.bind(this);
// 	// }
	
//     render() {
//         return (
//       		<HeaderWrapper>
//         		<GlobalStyled />
//         			{/* <Logo href='/'/> */}
//         		<Logo />
//         		<Nav>
// 					<NavItem className='left active'>首页</NavItem>
// 					<NavItem className='left'>下载App</NavItem>
// 					<NavItem className='right'>登录</NavItem>
// 					<NavItem className='right'>
// 						<span className="iconfont">&#xe636;</span>
// 					</NavItem>
// 					<SearchWrapper>
// 						<CSSTransition
// 							in={this.props.focused}
// 							timeout={200}
// 							classNames="slide"
// 						>
// 							<NavSearch
// 								className={this.props.focused ? 'focused':''}
// 								onFocus={this.props.handleInputFocus}
// 								onBlur={this.props.handleInputBlur}
// 							></NavSearch>
// 						</CSSTransition>
// 						<span className={this.props.focused ? 'focused iconfont':'iconfont'}>&#xe6e4;</span>
// 					</SearchWrapper>
// 				</Nav>

// 				<Addition>
// 					<Button className='writing'>
// 						<span className="iconfont">&#xe6e5;</span>
// 						写文章
// 					</Button>
// 					<Button className='reg'>注册</Button>
// 				</Addition>
//      		</HeaderWrapper>
//     	)
// 	}
	
// 	// handleInputFocus(){
// 	// 	this.setState({
// 	// 		focused: true
// 	// 	})
// 	// }

// 	// handleInputBlur(){
// 	// 	this.setState({
// 	// 		focused: false
// 	// 	})
// 	// }

// }

//映射取数据
const mapStateToProps = (state) => {
	return {
		// 已经是一个immutable对象，调用focus是不可以的，需要传入get（）获取对应属性
		// focused: state.header.focused
		// state是js对象 header是immutable对象
		// focused: state.header.get('focused')
		//让state也变成immutable对象
		// focused: state.get('header').get('focused')等价于下面
		focused: state.getIn(['header','focused']),
		list: state.getIn(['header','list']),
		page: state.getIn(['header','page']),
		totalPage: state.getIn(['header','totalPage']),
		mouseIn: state.getIn(['header','mouseIn']),
		login: state.getIn(['login','login'])
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleInputFocus(list){
			if(list.size === 0){
				dispatch(actionCreators.getList());
			}
			// const action = {actionCreators.searchFocus()};
			// dispatch(action);
			dispatch(actionCreators.searchFocus());
		},
		handleInputBlur(){
			// const action = {
			// 	type: 'search_blur'
			// };
			// dispatch(action);
			dispatch(actionCreators.searchBlur());
		},
		handleMouseEnter(){
			dispatch(actionCreators.mouseEnter());
		},
		handleMouseLeave(){
			dispatch(actionCreators.mouseLeave());
		},
		handleChangePage(page,totalPage,spin){
			let originAngle = spin.style.transform.replace(/[^0-9]/ig,'');
			if(originAngle) {
				originAngle = parseInt(originAngle,10);
			}else {
				originAngle = 0;
			}
			spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
			if(page < totalPage){
				dispatch(actionCreators.changePage(page + 1));
			}else {
				dispatch(actionCreators.changePage(1));
			}
		},
		logout() {
			dispatch(loginActionCreators.logout())
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);