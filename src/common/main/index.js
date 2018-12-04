import React, {Fragment} from 'react';
import { connect } from 'react-redux'
import { Layout  } from 'antd';
import { Route, withRouter } from "react-router-dom";
import Article from "../../page/article"
import Category from "../../page/category"

const Main = (props) => {
  const { Content } = Layout;
 
  //console.log(props)
  return (
       
            <Content style={{ margin: '24px 24px', padding: 24, background: '#fff', minHeight: '280px' }}>
            
          
                <Route exact path="/" component={Article} />
                <Route path="/category" component={Category} />
                <Route path="/article" component={Article} />
               
               
            </Content>
       
  )
}


export default withRouter(connect(null, null)(Main));
//export default Main;