/**
 * Created by namvh on 30/07/2017.
 */
import React from "react";

import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;


class MovingHouse extends React.Component {
    state = {
        collapsed: false,
    }
    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    render() {
        return (
            <div>
                <Layout>
                    <Layout>
                        <Header>Header</Header>
                        <Content>Content</Content>
                        <Footer>Footer</Footer>
                    </Layout>
                    <Sider width="500px">Sider</Sider>
                </Layout>
            </div>
        );
    }
}

export default MovingHouse;