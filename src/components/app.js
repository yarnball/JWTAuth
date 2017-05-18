import React, { Component } from 'react';
import HeaderTemplate from './template/header';
import FooterTemplate from './template/footer';
import { Button } from 'react-toolbox/lib/button';
class App extends Component {
  render() {
    return (
      <div>
        <HeaderTemplate logo="Your Site" />

        <div className="container">
          <Button label="Hello World!" />
          {this.props.children}
        </div>

        <FooterTemplate />
      </div>
    );
  }
}

export default App;
