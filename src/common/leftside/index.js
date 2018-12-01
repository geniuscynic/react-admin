import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Layout, Menu, Icon } from 'antd';
import { Link} from 'react-router-dom';
import { actionCreators } from './store'


const buildSider = (props) => {
    
    const { defaultSelectedKeys, defaultOpenKeys, submeus, collapsed } = props;
    const {  Sider } = Layout;
    const { SubMenu } = Menu;
    return (
      <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          >
            <div className="logo" />
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={defaultSelectedKeys.toJS()}
              defaultOpenKeys={defaultOpenKeys.toJS()}
              style={{  borderRight: 0 }}
            >
            {
              submeus.map((suhmenu) => 
                  <SubMenu key={suhmenu.get('key')} title={<span><Icon type={suhmenu.get('icon')} />{suhmenu.get('title')}</span>}>
                    {
                      suhmenu.get('items').map((item) =>
                        <Menu.Item key={item.get('key')}><Link to={item.get('link')}>{item.get('title')}</Link></Menu.Item>
                      )
                  
                    }
                  </SubMenu>
              )
            }
            
            </Menu>
        
      </Sider>
    );
};

//const LeftSide = (props) => {
class LeftSide extends Component {
  componentDidMount() {
    this.props.getLeftMenu();
  }
   
  render() {
    const { defaultSelectedKeys } = this.props;

    if(defaultSelectedKeys.count() === 1) {
      return buildSider(this.props);
    }
    else {
      return null;
    }
  }
};

const mapStateToProps = (state) => {
  return {
    defaultSelectedKeys: state.getIn(['aside','defaultSelectedKeys']),
    defaultOpenKeys: state.getIn(['aside','defaultOpenKeys']),
    submeus: state.getIn(['aside', 'submeus']),
    collapsed: state.getIn(['header', 'collapsed'])
  }
};

const mapDispatchToProps = (dispatch) => {
    return {
      getLeftMenu() {
       dispatch(actionCreators.getLeftMenu());
      }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LeftSide);