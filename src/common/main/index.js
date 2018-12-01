import React, {Fragment} from 'react';
import { Layout , Breadcrumb } from 'antd';
import { Route } from "react-router-dom";
import Article from "../../page/article"
import Category from "../../page/category"

const Main = (props) => {
  const { Content } = Layout;
  return (
        <Fragment>
            <Breadcrumb style={{ margin: '24px 0 0 16px' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: '280px' }}>
            
          
                <Route exact path="/" component={Article} />
                <Route path="/category" component={Category} />
                <Route path="/article" component={Article} />
               
               
            </Content>
        </Fragment>
  )
}

export default Main;