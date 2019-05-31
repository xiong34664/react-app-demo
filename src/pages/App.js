import React, {Component} from 'react'
import {Layout} from 'antd'
import {IndexRouters} from '../router/router'
import Header from '../components/Header'

import './App.css'

const {Content, Footer} = Layout

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidMount() {
    if(!localStorage.token) {
     return this.props.history.replace('/login')
    }
  }
  render() {
    return (
      <Layout>
        <Header />
        <Content style={{padding: '0 50px'}}>
          {/*显示二级路由页*/}
          <IndexRouters />
        </Content>
        <Footer style={{textAlign: 'center'}}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    )
  }
}

export default App
