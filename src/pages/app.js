import React, { Component } from 'react';

import Header from '../components/blocks/header';
import Footer from '../components/blocks/footer';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="main-body">
          {this.props.children}
        </div>
        <Footer/>
      </div>
    );
  }
}
