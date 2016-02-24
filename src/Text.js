import React, { Component, PropTypes } from 'react';
import Textbox from './Textbox';

class Text extends Component {
  static propTypes = {
    paddingBottom: PropTypes.number,
    children: PropTypes.node,
  };

  static defaultProps = {
    paddingBottom: 40,
  };

  static defaultStyle = {
    color: '#ffffff',
    fontFamily: 'Arial',
    fontSize: 18,
    lineHeight: '22px',
    textAlign: 'center',
    fontWeight: 300,
    paddingBottom: 40,
  };

  render() {
    const textStyle = {
      ...Text.defaultStyle,
      paddingBottom: this.props.paddingBottom,
    };

    return (
      <Textbox style={textStyle}>{this.props.children}</Textbox>
    );
  }
}

export default Text;
