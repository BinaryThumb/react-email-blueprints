import React, { Component, PropTypes } from 'react';
import Textbox from './Textbox';

class H2 extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  static defaultStyle = {
    color: '#ffffff',
    fontFamily: 'Arial',
    fontSize: 36,
    lineHeight: '34px',
    textAlign: 'center',
    fontWeight: 500,
  };

  render() {
    return (
      <Textbox className="h2" style={H2.defaultStyle}>
        {this.props.children}
      </Textbox>
    );
  }
}

export default H2;
