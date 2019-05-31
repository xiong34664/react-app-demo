import React, { Component } from 'react';
import { Row, Col, message, Form, Input, Button, Checkbox } from "antd";
import css from './style.module.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.setState({loading: true})
        console.log('Received values of form: ', values);
        message.success('登录成功',2,()=>{
          this.setState({loading: false})
          localStorage.token = Date.now()
          this.props.history.push('/index/home')
        })
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className={css.container}>
        <Row>
          <Col span={12}>
            <div className={css.block}>
              <div className={css.logo}>
                  <img
                    className={css.logoImg}
                    src={require('../../images/logo.png')}
                    alt="logo"
                  />
              </div>
              <div className={css.title}>让前端开发简单友好</div>
              <p className={css.description}>Amazing Stuff is Lorem Here.ICE Team</p>
              <Button type="primary" className={css.button}>
                注册
          </Button>
            </div>
          </Col>
          <Col span={12}>
            <div className={css.content}>
             
                <h2 className={css['form-title']}>登录</h2>

                <Form onSubmit={this.handleSubmit} style={{ width: '100%' }} className={css['login_form']}>
                  <Form.Item
                    wrapperCol={{ span: 12, offset: 6 }}
                  >
                    {getFieldDecorator('username', {
                      rules: [{ required: true, message: '用户名必填' }],
                    })(
                      <Input placeholder='用户名' />
                    )}
                  </Form.Item>
                  <Form.Item
                    wrapperCol={{ span: 12, offset: 6 }}
                  >
                    {getFieldDecorator('password', {
                      rules: [{ required: true, message: '密码必填' }],
                    })(
                      <Input placeholder='密码' type="password" />
                    )}
                  </Form.Item>
                  <Form.Item
                    wrapperCol={{ span: 10, offset: 6 }}
                    style={{marginTop: -10}}
                  >
                    {getFieldDecorator('flag')(
                      <Checkbox >记住账户</Checkbox>
                    )}
                  </Form.Item>
                </Form>
                <Button type="primary" onClick={this.handleSubmit} className={css['login_btn']} loading={this.state.loading}>登录</Button>
             
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Form.create({ name: 'coordinated' })(App);