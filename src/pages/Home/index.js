import React, {Component} from 'react'
import {Breadcrumb} from 'antd'
import css from "./style.module.css";   //css  加上后缀  .module  即自动默认为可模块化的样式  导出来的样式都在  css对象内

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>
        <Breadcrumb style={{margin: '16px 0'}}>
          <Breadcrumb.Item>index</Breadcrumb.Item>
          <Breadcrumb.Item>home</Breadcrumb.Item>
        </Breadcrumb>
        <div className="content shadow-0px">
          首页

          <div className={css['shadow-1px']}>css模块化样式</div>
        </div>
      </div>
    )
  }
}
export default Home
