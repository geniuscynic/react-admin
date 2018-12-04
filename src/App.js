import React, { Component } from 'react';

//router
import { BrowserRouter } from "react-router-dom";

//data
import { Provider } from 'react-redux'
import store from "./store"
//UI
import { Layout  } from 'antd';
import  Header  from './common/header';
import  LeftSide  from './common/leftside';
import  Main  from './common/main';
import  Breadcrumb  from './common/breadcrumb';

class App extends Component {
  
  render() {
    const { Footer } = Layout;
    return (
      <Provider store = {store}>
        <BrowserRouter>
          <Layout style={{ height: '100%' }}>
            <LeftSide />
            <Layout >
              <Header />
              <Breadcrumb />
              <Main /> 
              <Footer style={{ textAlign: 'center' }}>by 月落追魂</Footer>
            </Layout>
          </Layout>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
