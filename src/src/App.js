import React, { Component } from 'react';
import { Layout, Select } from 'antd';
import { Menu, Icon, Carousel, Divider, Row, Col, LocaleProvider } from 'antd';
import { IntlProvider, FormattedMessage, addLocaleData } from 'react-intl';
import './App.css';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import en_US from 'antd/lib/locale-provider/en_US';
import zh from 'react-intl/locale-data/zh';
import en from 'react-intl/locale-data/en';
import Intl_zh_CN from './locales/zh_CN.json';
import Intl_en_US from './locales/en_US.json';


const { Header, Footer, Content } = Layout;
const Option = Select.Option;

const LANG_MAP = {
  "zh-CN": zh_CN,
  "en-US": en_US,
};

const messages = {
  "zh-CN": Intl_zh_CN,
  "en-US": Intl_en_US,
}
const DEFAULT_LANG = 'en-US';
console.log(navigator.languages[0]);
addLocaleData([...zh, ...en])

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: DEFAULT_LANG
    };
  }

  handleChange = (newVal) => {
    this.setState({
      lang: newVal,
    })
  }

  render() {
    return (
      <LocaleProvider locale={LANG_MAP[this.state.lang]}>
        <IntlProvider locale={this.state.lang} key={this.state.lang} messages={messages[this.state.lang]}>
          <Layout>
            <Header>
              <div className="logo" style={{ width: '200px', height: '64px', float: 'left' }}>
                <img src="https://via.placeholder.com/64x64" alt="logo"></img>
                <span style={{ color: '#ffffff', fontSize: '20pt', marginLeft: '25px' }}>IdotLight</span>
              </div>
              <Menu
                mode="horizontal"
                theme="dark"
                style={{ lineHeight: '64px' }}
              >
                <Menu.Item key="products">
                  <FormattedMessage id="title.products" defaultMessage="Products" />
                </Menu.Item>
                <Menu.Item key="news">
                  <FormattedMessage id="title.news" defaultMessage="News" />
                </Menu.Item>
                <Menu.Item key="idot-light">
                  <FormattedMessage id="title.company.name" defaultMessage="IdotLight"/>
              </Menu.Item>
              </Menu>
              <div style={{ position: 'absolute', right: '30px', top: '0px' }}>
                <Icon type="global" theme="outlined" style={{ color: '#FFFFFF', marginRight: '10px' }} />
                <Select defaultValue={DEFAULT_LANG} value={this.state.lang} onChange={this.handleChange}>
                  <Option value="en-US">English</Option>
                  <Option value="zh-CN">简体中文</Option>
                </Select>
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
                <Row type="flex" align="middle">
                  <Col span={16} offset={2}>
                    <div className="sub-title"><FormattedMessage id="products.recent" defaultMessage="Recent Products"/></div>
                  </Col>
                  <Col span={4}>
                  <a><FormattedMessage id="more" defaultMessage="more" style={{lineHeight: "64px"}}/></a>
                  </Col>
                </Row>
                <Row gutter={32} style={{ height: '400px' }}>
                  <Col span={5} className="pic-container" offset={2}>
                    <div className="product-pic"></div>
                  </Col>
                  <Col span={5} className="pic-container">
                    <div className="product-pic"></div>
                  </Col>
                  <Col span={5} className="pic-container">
                    <div className="product-pic"></div>
                  </Col>
                  <Col span={5} className="pic-container">
                    <div className="product-pic"></div>
                  </Col>
                </Row>
              </div>
              <Divider />
              <div className="featured-product">
                <Row type="flex" align="middle">
                  <Col span={16} offset={2}>
                  <div className="sub-title"><FormattedMessage id="products.featured" defaultMessage="Featured Products"/></div>
                  </Col>
                  <Col span={4}>
                  <a><FormattedMessage id="more" defaultMessage="more" style={{lineHeight: "64px"}}/></a>
                  </Col>
                </Row>
                <Row gutter={32} style={{ height: '400px' }}>
                  <Col span={5} className="pic-container" offset={2}>
                    <div className="product-pic"></div>
                  </Col>
                  <Col span={5} className="pic-container">
                    <div className="product-pic"></div>
                  </Col>
                  <Col span={5} className="pic-container">
                    <div className="product-pic"></div>
                  </Col>
                  <Col span={5} className="pic-container">
                    <div className="product-pic"></div>
                  </Col>
                </Row>
              </div>
              <Divider />
              <Row style={{ width: "100%", background: "#001529", color: "#ffffff", padding: "70px 0px" }}>
                <Col span={2} offset={2}>
                  <div className="sub-title"><FormattedMessage id="links" defaultMessage="Links"/></div>
                  <div><a><FormattedMessage id="links.info" defaultMessage="Company Info"/></a></div>
                  <div><a><FormattedMessage id="links.products" defaultMessage="Products"/></a></div>
                  <div><a><FormattedMessage id="links.design" defaultMessage="Design"/></a></div>
                  <div><a><FormattedMessage id="links.hiring" defaultMessage="Hiring"/></a></div>
                  <div><a><FormattedMessage id="links.contact" defaultMessage="Contact"/></a></div>
                  <div><a><FormattedMessage id="links.support" defaultMessage="Support"/></a></div>
                </Col>
                <Col span={8} offset={4}>
                  <div className="sub-title"><FormattedMessage id="findus" defaultMessage="Find us"/></div>
                  <div>
                    <Icon type="bank" theme="outlined" className="prev-icon"/><FormattedMessage id="findus.address" defaultMessage="Guzhen, Zhongshan city, Guangdong province, China."/>
                </div>
                  <div>
                    <Icon type="phone" theme="outlined" className="prev-icon"/><FormattedMessage id="findus.telephone" defaultMessage="131-1111-1111"/>
                </div>
                  <div>
                    <Icon type="mail" theme="outlined" className="prev-icon"/><FormattedMessage id="findus.email" defaultMessage="12345@678.com"/>
                </div>
                  <div>
                    <Icon type="home" theme="outlined" className="prev-icon"/><FormattedMessage id="findus.home" defaultMessage="wbgbg.github.io/chensi"/>
                </div>
                </Col>
                <Col span={4}>
                  <div className="sub-title"><FormattedMessage id="social" defaultMessage="Social Network"/></div>
                  <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                    <Icon type="facebook" theme="outlined" style={{ fontSize: '18pt' }} />
                    <Icon type="twitter" theme="outlined" style={{ fontSize: '18pt' }} />
                    <Icon type="wechat" theme="outlined" style={{ fontSize: '18pt' }} />
                    <Icon type="weibo" theme="outlined" style={{ fontSize: '18pt' }} />
                    <Icon type="taobao-circle" theme="outlined" style={{ fontSize: '18pt' }} />
                    <Icon type="qq" theme="outlined" style={{ fontSize: '18pt' }} />
                  </div>
                </Col>
              </Row>
            </Content>
            <Footer>
              <Row style={{width: "100%"}}>
                <Col span={24} className="footer">
                <div >
                © 2018 Idot Light
                </div>
                </Col>
              </Row>
              {/* <div style={{width: "100%", height: "500px", background: "#001529", display: "flex", flexDirection: "row", color: '#ffffff'}}>
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
            </div> */}
            </Footer>
          </Layout>
        </IntlProvider>
      </LocaleProvider>
    );
  }
}

export default App;