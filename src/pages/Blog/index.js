import React, {Component} from 'react'
import {Breadcrumb} from 'antd'

class Blog extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>
        <Breadcrumb style={{margin: '16px 0'}}>
          <Breadcrumb.Item>index</Breadcrumb.Item>
          <Breadcrumb.Item>blog</Breadcrumb.Item>
        </Breadcrumb>
        <div className="content shadow-0px">
          博客
        </div>
      </div>
    )
  }
}
export default Blog
