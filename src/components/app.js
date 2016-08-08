import React, { Component } from 'react';

import Header from './blocks/header';
import Footer from './blocks/footer';

export default class App extends Component {
  render() {
    return (
      <div>
      <Header/>
      {this.props.children}
      <Footer/>
      </div>
    );
  }
}
