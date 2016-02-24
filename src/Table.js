import React, { Component, PropTypes } from 'react';

import Row from './Row';
import Cell from './Cell';

class Table extends Component {
  static propTypes = {
    border: PropTypes.number,
    cellSpacing: PropTypes.number,
    cellPadding: PropTypes.number,
    children: PropTypes.node,
  };

  static defaultProps = {
    border: 0,
    cellSpacing: 0,
    cellPadding: 0,
  };

  render() {
    return (
      <table {...this.props}>
        <tbody>{this.props.children}</tbody>
      </table>
    );
  }
}

Table.Row = Row;
Table.Cell = Cell;

export default Table;
