import React, { Component, PropTypes } from 'react';

class Row extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return (
      <tr {...this.props}>{this.props.children}</tr>
    );
  }
}

export default Row;
