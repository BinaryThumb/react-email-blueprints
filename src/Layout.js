import React, { Component, PropTypes } from 'react';

import Spacer from './Spacer';
import Table from './Table';

const Layout = {};

class LayoutMail extends Component {
  static propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
    imageBase: PropTypes.string,
    styles: PropTypes.string,
  };

  static defaultProps = {
    title: 'E-Mail template',
    imageBase: '',
  };

  static bodyStyle = {
    padding: 0,
    margin: 0,
    display: 'block',
    width: '100%',
    background: '#ffffff',
  };

  render() {
    return (
      <html xmlns="http://www.w3.org/1999/xhtml">
        <head>
          <meta httpEquiv="Content-type" content="text/html; charset=utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="format-detection" content="date=no" />
          <meta name="format-detection" content="address=no" />
          <meta name="format-detection" content="telephone=no" />
          <title>{this.props.title}</title>

          <style
            type="text/css"
            media="screen"
            dangerouslySetInnerHTML={{ __html: this.props.styles }} />
        </head>
        <body className="body" style={LayoutMail.bodyStyle}>
          <Table width="100%">
            <Table.Row>
              <Table.Cell verticalAlign="top" horizontalAlign="center">
                {this.props.children}

                <Spacer imageBase={this.props.imageBase} height={1} />

                <div className="wgmail" style={{ fontSize: 0, lineHeight: 0, textAlign: 'center' }}>
                  <Spacer
                    imageBase={this.props.imageBase}
                    height={1}
                    width="100%"
                    style={{ minWidth: '100%' }} />
                </div>
              </Table.Cell>
            </Table.Row>
          </Table>
        </body>
      </html>
    );
  }
}

Layout.Mail = LayoutMail;

export default Layout;
