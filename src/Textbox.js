import React, { Component, PropTypes } from 'react';

class Textbox extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return (
      <div {...this.props}>{this.props.children}</div>
    );
  }
}

export default Textbox;
