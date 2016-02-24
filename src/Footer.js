import React, { Component, PropTypes } from 'react';

import Table from './Table';
import Spacer from './Spacer';

class Footer extends Component {
  static propTypes = {
    imageBase: PropTypes.string,
    backgroundImage: PropTypes.string,
    backgroundColor: PropTypes.string,
    children: PropTypes.node,
  };

  static defaultProps = {
    imageBase: '',
  };

  static textFooterStyle = {
    color: '#000000',
    backgroundColor: 'transparent',
    fontFamily: 'Arial',
    fontSize: 18,
    lineHeight: '26px',
    textAlign: 'center',
    fontWeight: 300,
    width: '400px',
    margin: '10px auto 0',
  };

  render() {
    return (
      <Table width="100%" border={0} cellSpacing={0} cellPadding={0} className="mobile-shell">
        <Table.Row>
          <Table.Cell>
            <Table width="100%" border={0} cellSpacing={0} cellPadding={0} bgcolor="#24ccc2">
              <Table.Row>
                <td is class="background" height="711"
                  background={`${this.props.imageBase}/${this.props.backgroundImage}`}
                  bgcolor={this.props.backgroundColor} valign="top">
                  <div>
                    <Table width="100%" border={0} cellSpacing={0} cellPadding={0}>
                      <Table.Row>
                        <td className="img"
                          style={{ fontSize: 0, lineHeight: 0, textAlign: 'left' }}
                          width="20">
                          <Spacer imageBase={this.props.imageBase} width={1} height={1} />
                        </td>
                        <td>
                          <Spacer imageBase={this.props.imageBase} height={22} />
                          <div className="text-footer" style={Footer.textFooterStyle}>
                            {this.props.children}
                          </div>
                          <Spacer imageBase={this.props.imageBase} height={22} />
                        </td>
                        <td
                          className="img"
                          style={{ fontSize: 0, lineHeight: 0, textAlign: 'left' }} width="20">
                        </td>
                      </Table.Row>
                    </Table>
                  </div>
                </td>
              </Table.Row>
            </Table>
          </Table.Cell>
        </Table.Row>
      </Table>
    );
  }
}

export default Footer;
