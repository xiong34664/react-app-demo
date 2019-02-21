import React from 'react';
import ReactDOM from 'react-dom';
import './css/main.css'   //全局css 样式
import {Routers} from './router/router';   //导入  最外层路由

import * as serviceWorker from './serviceWorker';

//把最外层路由插入  根元素
ReactDOM.render(<Routers />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
