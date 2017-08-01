import React from 'react'
// import PropTypes from 'prop-types';
import {Row, Col, Layout, Popover, Button } from 'antd';
import './styles/About.ant.design.less';

class About extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { Footer, Content } = Layout;
    const content = (
      <Row>
        <Content>
          <img width="370px" height="137px" src="https://scontent.fhan5-2.fna.fbcdn.net/v/t1.0-9/18446555_1867898873423615_8132488922355232457_n.jpg?oh=a7b3685844a03e0a3597120be2cd55ff&oe=59F2D78B" alt="example"/>
        </Content>
        <Footer>
          <Button type="primary">Bạn bè</Button>
          <Button type="primary">Đang theo dõi</Button>
          <Button type="primary">Nhắn tin</Button>
        </Footer>
      </Row>
    );
    return (
        <Popover overlayClassName="hhc-info" placement="topLeft" content={content}>
          <img style={{marginLeft: '500px'}} width="80px" height="80px" src="https://scontent.fhan5-2.fna.fbcdn.net/v/t1.0-9/19598913_1891317254415110_9206315154791153618_n.jpg?oh=bf99cf8c97af4cdb125a87b1fba5bf29&oe=59FDE8DE" alt="example"/>
        </Popover>
    );
  }
}

// About.PropTypes = {
// };

export default About;
