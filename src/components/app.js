import React, { Component } from 'react';

import Header from './blocks/header';
import Footer from './blocks/footer';

export default class App extends Component {
  render() {
    return (
      <div>
      <Header/>
      <div className="break-div"></div>
      {this.props.children}
      <Footer/>
      </div>
    );
  }
}
