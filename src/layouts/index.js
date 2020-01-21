import { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import Link from 'umi/link';
import GlobalHeader from './GlobalHeader';
const { Header, Footer, Sider, Content } = Layout;


const SubMenu = Menu.SubMenu;

export default class BasicLayout extends Component {
  render() {
    return (
      <Layout>
        <Sider width={256} style={{ minHeight: '100vh' }}>
          <div style={{ height: '32px', background: 'rgba(255,255,255,.2)', margin: '16px' }} />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Link to="/helloworld">
                <Icon type="pie-chart" />
                <span>Happy Sugar Life</span>
              </Link>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={<span><Icon type="dashboard" /><span>Deep Learning Web App</span></span>}
            >
              <Menu.Item key="2"><Link to="/dashboard/analysis">Neural Style Transfer</Link></Menu.Item>
              <Menu.Item key="3"><Link to="/dashboard/monitor">Music Generation Network</Link></Menu.Item>
              <Menu.Item key="4"><Link to="/dashboard/workplace">Speech Style Geeration Network</Link></Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={<span><Icon type="retweet" /><span>How they work</span></span>}
            >
              <Menu.Item key="5"><Link to="/dashboard/analysis">Neural Style Transfer</Link></Menu.Item>
              <Menu.Item key="6"><Link to="/dashboard/monitor">Music Generation Network</Link></Menu.Item>
              <Menu.Item key="7"><Link to="/dashboard/workplace">Speech Style Geeration Network</Link></Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              title={<span><Icon type="retweet" /><span>A place for myself</span></span>}
            >
              <Menu.Item key="8"><Link to="/dashboard/analysis">Happy Sugar Life</Link></Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub4"
              title={<span><Icon type="retweet" /><span>About Me</span></span>}
            >
              <Menu.Item key="9"><Link to="/dashboard/analysis">About Me</Link></Menu.Item>
              <Menu.Item key="10"><Link to="/dashboard/analysis">Contact</Link></Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout >
          <GlobalHeader />
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    )
  }
}