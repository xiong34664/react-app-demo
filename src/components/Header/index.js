import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {Menu} from 'antd'
import css from './style.module.css'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedKeys: null
    }
    //  显示正确当前  menu的高亮  从props.match.params 获取当前  路由值
    if (this.props.match.params) {
      this.state.selectedKeys = [this.props.match.params.id]
    }
  }
  //点击menu 跳转到想要的路由  menu key 正好匹配路由地址
  goPage = ({key, selectedKeys}) => {
    this.setState({selectedKeys})
    this.props.history.push(`/index/${key}`)
  }
  render() {
    return (
      <div className={css.header}>
        <div className={css.logo} />
        <Menu
          theme="dark"
          mode="horizontal"
          style={{lineHeight: '64px'}}
          onSelect={this.goPage}
          selectedKeys={this.state.selectedKeys}
        >
          <Menu.Item key="home">Home</Menu.Item>
          <Menu.Item key="blog">Blog</Menu.Item>
          <Menu.Item key="about">About</Menu.Item>
        </Menu>
      </div>
    )
  }
}
export default withRouter(Header)
