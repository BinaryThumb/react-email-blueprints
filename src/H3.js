import React, { Component, PropTypes } from 'react';
import Textbox from './Textbox';

class H3 extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  static defaultStyle = {
    color: '#ffffff',
    fontFamily: 'Arial',
    fontSize: 18,
    lineHeight: '30px',
    textAlign: 'center',
    fontWeight: 300,
  };

  render() {
    return (
      <Textbox className="h3" style={H3.defaultStyle}>
        {this.props.children}
      </Textbox>
    );
  }
}

export default H3;
