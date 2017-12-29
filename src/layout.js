import React, { Component } from 'react';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Content from './components/Content';

class Layout extends Component {
constructor(props){
	super(props);
	console.log(this.state);
}
ComponentDidMount(){
	console.log(this.state);
}
  render() {
    return (
      <div>
        <Header />
        <SideBar />
        <Content />
      </div>
    );
  }
}

export default Layout;