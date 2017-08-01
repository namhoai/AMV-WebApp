import React from 'react'
import MovingHouse from './MovingHouse'
import { Layout } from 'antd';
import logo from './../logo.svg'
const { Content } = Layout;

export default React.createClass({
  render() {
    return (
        <div>
          <Content style={{ padding: '0 50px' }}>
            <div style={{ margin: '12px 0' }} />
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
              <img src={logo} className="App-logo" alt="logo" />
              <MovingHouse />
            </div>
          </Content>
        </div>
    );
  }
})
