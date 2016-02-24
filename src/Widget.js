import React, { Component, PropTypes } from 'react';

import Table from './Table';

class Widget extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    height: PropTypes.number,
    spacing: PropTypes.number,
  };

  render() {
    const imgStyle = {
      fontSize: 0,
      lineHeight: 0,
      textAlign: 'left',
    };

    return (
      <Table className={this.props.className} width={this.props.width}>
        <Table.Row>
          <Table.Cell className="img" style={imgStyle} width={this.props.spacing} />
          <Table.Cell>
            {this.props.children}
          </Table.Cell>
          <Table.Cell className="img" style={imgStyle} width={this.props.spacing} />
        </Table.Row>
      </Table>
    );
  }
}

export default Widget;
