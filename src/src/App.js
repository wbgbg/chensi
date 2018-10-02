import React, { Component } from 'react';
import { Layout, Dropdown, Button } from 'antd';
import { Menu, Icon, Carousel, Divider, Row, Col } from 'antd';
import './App.css';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const { Header, Footer, Sider, Content } = Layout;


class App extends Component {
  menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer">简体中文</a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer">English</a>
      </Menu.Item>
    </Menu>
  );
  
  render() {
    return (
      <Layout>
        <Header>
          <div className="logo" style={{width: '200px', height: '64px', float: 'left'}}>
            <img src="https://via.placeholder.com/64x64"></img>
            <span style={{color: '#ffffff', fontSize: '20pt', marginLeft: '25px'}}>IdotLight</span>
          </div>
          <Menu
            mode="horizontal"
            theme="dark"
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="products">
              Products
            </Menu.Item>
            <Menu.Item key="news">
              News
            </Menu.Item>
            <Menu.Item key="idot-light">
              IdotLight
            </Menu.Item>
          </Menu>
          <div style={{position: 'absolute', right: '30px', top: '0px'}}>
            <Icon type="global" theme="outlined" style={{color: '#FFFFFF', marginRight: '10px'}} />
            <Dropdown overlay={this.menu}>
              <a className="ant-dropdown-link" href="#">
                简体中文<Icon type="down" />
              </a>
            </Dropdown>
          </div>
        </Header>
        <Content>
          <Carousel autoplay>
            <div><h3>1</h3></div>
            <div><h3>2</h3></div>
            <div><h3>3</h3></div>
            <div><h3>4</h3></div>
          </Carousel>
          <Divider />
          <div className="recent-product">
            <Row>
              <Col span={16} offset={2}>
                <span>最新产品</span>
              </Col>
              <Col span={4}>
                <Button>more</Button>
              </Col>
            </Row>
            <Row gutter={32} style={{height: '400px'}}>
              <Col span={6} className="pic-container">
                <div className="product-pic"></div>
              </Col>
              <Col span={6} className="pic-container">
              <div className="product-pic"></div>
              </Col>
              <Col span={6} className="pic-container">
              <div className="product-pic"></div>
              </Col>
              <Col span={6} className="pic-container">
              <div className="product-pic"></div>
              </Col>
            </Row>
          </div>
          <Divider />
          <div className="featured-product">
            <Row>
              <Col span={16} offset={2}>
                <span>特色产品</span>
              </Col>
              <Col span={4}>
                <Button>more</Button>
              </Col>
            </Row>
            <Row gutter={32} style={{height: '400px'}}>
              <Col span={6} className="pic-container">
              <div className="product-pic"></div>
              </Col>
              <Col span={6} className="pic-container">
              <div className="product-pic"></div>
              </Col>
              <Col span={6} className="pic-container">
              <div className="product-pic"></div>
              </Col>
              <Col span={6} className="pic-container">
              <div className="product-pic"></div>
              </Col>
            </Row>
          </div>
          <Divider/>
        </Content>
        <Footer>
          <div style={{width: "100%", height: "500px", background: "#001529", display: "flex", flexDirection: "row", color: '#ffffff'}}>
            <div style={{display: "flex", flexDirection: "column", flex: 1}}>
              <a>公司信息</a>
              <a>联系我们</a>
              <a>支持</a>
            </div>
            <div style={{display: "flex", flexDirection: "column"}}>
              <div>
                <Icon type="phone" theme="outlined" /> 131-1111-1111
              </div>
              <div>
              <Icon type="mail" theme="outlined" /> 12345@678.com
              </div>
            </div>
          </div>
        </Footer>
      </Layout>
    );
  }
}

export default App;