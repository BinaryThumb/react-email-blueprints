import React, { Component, PropTypes } from 'react';
import omit from 'lodash.omit';

class Cell extends Component {
  static propTypes = {
    verticalAlign: PropTypes.string,
    horizontalAlign: PropTypes.string,
    children: PropTypes.node,
  };

  static defaultProps = {
    verticalAlign: '',
    horizontalAlign: '',
  };

  render() {
    const cellProps = omit(this.props, ['verticalAlign', 'horizonalAlign']);

    if (this.props.verticalAlign || this.props.horizontalAlign) {
      cellProps.is = true;
    }

    if (this.props.verticalAlign) {
      cellProps.valign = this.props.verticalAlign;
    }

    if (this.props.horizontalAlign) {
      cellProps.align = this.props.horizontalAlign;
    }

    return (
      <td {...cellProps}>{this.props.children}</td>
    );
  }
}

export default Cell;
