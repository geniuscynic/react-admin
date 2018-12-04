import React from 'react';
import { connect } from 'react-redux'
import { Breadcrumb } from 'antd';
import { Link, withRouter} from 'react-router-dom';





//const LeftSide = (props) => {
const MainBreadcrumb = (props) => {
  const { location, submeus } = props;

  if(submeus.count() === 0) {
    return null;
  }

  
  
  
  const pathSnippets = location.pathname.split('/').filter(i => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;


    const menuJS = submeus.toJS();
    let breadcrumbs = [];
    for (const menu of menuJS) { // TypeError: obj[Symbol.iterator] is not a function
      let hadFind = false; 
      for (const item of menu['items']) {
        if(item['link'] === url) {
          breadcrumbs.push(item);
          hadFind = true;

          //console.log(item);
          break;
        }
      }

      if(hadFind) {
        breadcrumbs.push(menu);
        break;
      }
    }
      
    breadcrumbs.reverse();

    return breadcrumbs.map((item) => 
        <Breadcrumb.Item key={item['key']}>
        <Link to={item['link']}>
          {item['title']}
        </Link>
        </Breadcrumb.Item>   
    );
   
  });

  

  const breadcrumbItems = [(
    <Breadcrumb.Item key="home">
      <Link to="/">Home</Link>
    </Breadcrumb.Item>
  )].concat(extraBreadcrumbItems);

  return (
    <Breadcrumb style={{ margin: '24px 0 0 24px' }}>
      {breadcrumbItems}
    </Breadcrumb>
)};


const mapStateToProps = (state) => {
  return {
    submeus: state.getIn(['aside', 'submeus'])
  }
};

// const mapDispatchToProps = (dispatch) => {
   
// };

export default withRouter(connect(mapStateToProps, null)(MainBreadcrumb));