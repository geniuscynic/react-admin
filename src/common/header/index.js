import React from 'react';
import { Layout, Icon } from 'antd';
import { connect } from 'react-redux'
import { actionCreators } from './store'

const Header = (props) => {
  const { Header } = Layout;
  const { collapsed, toggle } = props;
  return (
    <Header className="header">
      <Icon
              className="trigger"
              type={collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={toggle}
            />
    </Header>
  )
}

const mapStateToProps = (state) => {
  return {
    collapsed: state.getIn(['header','collapsed']),
  }
};

const mapDispatchToProps = (dispatch) => ({
    toggle() {
       dispatch(actionCreators.toggleCollapsed());
     }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);