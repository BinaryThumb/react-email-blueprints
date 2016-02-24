import React, { Component, PropTypes } from 'react';
import Image from './Image';
import Spacer from './Spacer';
import Table from './Table';

class Button extends Component {
  static propTypes = {
    imageBase: PropTypes.string,
    link: PropTypes.string,
    children: PropTypes.node,
    buttonLeft: PropTypes.string,
    buttonRight: PropTypes.string,
    borderColor: PropTypes.string,
  };

  static defaultProps = {
    link: '#',
    borderColor: '#000000'
  };

  static textButtonStyle = {
    color: '#000000',
    fontFamily: 'Arial, sans-serif, "Roboto"',
    fontSize: 20,
    lineHeight: '24px',
    textAlign: 'center',
    fontWeight: 500,
  };

  render() {
    return (
      <Table width="100%" style={{ paddingBottom: 20 }}>
        <Table.Row>
          <Table.Cell horizontalAlign="center">
            <Table
              className="button"
              style={{ fontSize: 0, lineHeight: 0, textAlign: 'left' }} width="320"
              border={0} cellSpacing={0} cellPadding={0}>
              <Table.Row>
                <Table.Cell
                  className="img"
                  style={{ fontSize: 0, lineHeight: 0, textAlign: 'center' }}
                  width="15">
                  <Image
                    src={`${this.props.imageBase}/${this.props.buttonLeft}`}
                    border="0" alt="" width="15" height="49" />
                </Table.Cell>
                <Table.Cell
                  className="img"
                  style={{ fontSize: 0, lineHeight: 0, textAlign: 'left' }}>
                  <Spacer
                    imageBase={this.props.imageBase}
                    height={2} width="100%"
                    background={this.props.borderColor} />

                  <a style={{ textDecoration: 'none' }} href={this.props.link}>
                    <Table width="100%">
                      <Table.Row>
                        <Table.Cell
                          height="45"
                          className="text-btn"
                          style={Button.textButtonStyle}>
                          <div>{this.props.children}</div>
                        </Table.Cell>
                      </Table.Row>
                    </Table>
                  </a>

                  <Spacer
                    imageBase={this.props.imageBase}
                    height={2}
                    width="100%"
                    background={this.props.borderColor} />
                </Table.Cell>
                <Table.Cell
                  className="img"
                  style={{ fontSize: 0, lineHeight: 0, textAlign: 'left' }} width="15">
                  <Image
                    border="0"
                    src={`${this.props.imageBase}/${this.props.buttonLeft}`} alt="" width="15" height="49" />
                </Table.Cell>
              </Table.Row>
            </Table>
          </Table.Cell>
        </Table.Row>
      </Table>
    );
  }
}

export default Button;
