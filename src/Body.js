import React, { Component, PropTypes } from 'react';

import Table from './Table';

class Body extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return (
      <Table width="100%" className="mobile-shell">
        <Table.Row>
          <Table.Cell verticalAlign="top" horizontalAlign="center">
          {this.props.children}
          </Table.Cell>
        </Table.Row>
      </Table>
    );
  }
}

export default Body;
