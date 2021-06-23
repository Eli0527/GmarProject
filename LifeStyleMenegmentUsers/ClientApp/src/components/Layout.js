import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import './layout.css';
export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div className = "mainCont">
        <NavMenu />
        <Container >
          {this.props.children}
        </Container>
      </div>
    );
  }
}
