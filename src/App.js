import React, { Component } from 'react';
import { GlobalStyled } from './style';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header';
import Home from './pages/home';
// 异步组件
import Detail from './pages/detail/loadable.js';
import Login from './pages/login';
import Write from './pages/write';
import store from './store';

class App extends Component{
  	render(){
    	return (
      		<Provider store={store}>
					<BrowserRouter>
						<GlobalStyled />
						<Header />
							<div>
								{/* 只有路径跟/完全相等的时候才会显示home的内容 */}
								<Route path ='/'  exact component={Home}></Route>
								<Route path ='/login'  exact component={Login}></Route>
								<Route path ='/write'  exact component={Write}></Route>
								<Route path ='/detail/:id' exact component ={Detail}></Route>
								{/* 第二种方法使用参数<Route path ='/detail' exact component ={Detail}></Route> */}
							</div>
					</BrowserRouter>
      		</Provider>
    	);
  	}
}
export default App;
