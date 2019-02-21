import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

//导入需要渲染的组件
import Index from '../pages/App'         //最外层容器
import Login from '../pages/Login'         //登录页
import NoMatch from '../pages/NoMatch'   //404页面
import Home from '../pages/Home'
import Blog from '../pages/Blog'
import About from '../pages/About'

//配置路由表   最外层路由   
/**
 * path  路由地址
 * component  渲染的组件
 * exact   是否为严格匹配
 */
const routerMap = [
  {path: '/index/:id', component: Index, exact: true},
  {path: '/login', component: Login, exact: true},
  {path: '/', component: Index, exact: true},
  {path: '*', component: NoMatch, exact: true}
]
//配置  index  路由表
const IndexRouterMap = [
  {path: '/index/home', component: Home, exact: true},
  {path: '/index/blog', component: Blog, exact: true},
  {path: '/index/about', component: About, exact: true},
  {path: '*', component: NoMatch, exact: true}
]

//生成index路由
export const IndexRouters = () => (
  <Switch>
    {IndexRouterMap.map(router => (
      <Route {...router} key={router.path}/>
    ))}
  </Switch>
)

//生成最外层路由
export const Routers = () => (
  <Router>
    <Switch>
      {routerMap.map(router => (
        <Route {...router} key={router.path}/>
      ))}
    </Switch>
  </Router>
)
