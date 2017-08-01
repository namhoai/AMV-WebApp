import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Users from "./components/Users"
import { browserHistory } from 'react-router'
import './App.css';

const { Header, Content, Footer } = Layout;

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            SelectedKeys : ['chuyennha'],
        }
    }
    Onclick = (event) => {
        debugger;
        const SelectedKeys = [event.key];
        this.setState({
            SelectedKeys
        });
        const path = (SelectedKeys[0] === 'chuyennha') ? `/` : `/${SelectedKeys[0]}`;
        browserHistory.push(path);
        console.log();
    };
  render(){
    return (
      <Layout className="layout">
        <Header>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={this.state.SelectedKeys}
            style={{ lineHeight: '64px' }}
            onClick={this.Onclick}
          >
            <Menu.Item key="chuyennha"><Icon type="pie-chart" style={{ fontSize: 18, color: '#ffffff' }}/></Menu.Item>
            <Menu.Item key="chuyenvp"><Icon type="windows" style={{ fontSize: 18, color: '#ffffff' }} /></Menu.Item>
            <Menu.Item key="vantai"><Icon type="chrome" style={{ fontSize: 18, color: '#ffffff' }} /></Menu.Item>
          </Menu>
        </Header>
          {this.props.children}
        <Footer style={{ textAlign: 'center' }}>
          Design ©2017 Created by NamVH
        </Footer>
      </Layout>
    );
  }
}

export default App;

