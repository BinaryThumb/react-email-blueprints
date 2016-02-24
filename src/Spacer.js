import React, { Component, PropTypes } from 'react';
import Image from './Image';

class Spacer extends Component {
  static propTypes = {
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    className: PropTypes.string,
    background: PropTypes.string,
    imageBase: PropTypes.string,
  };

  static defaultProps = {
    height: 40,
    width: 1,
    imageBase: '',
  };

  static image = 'spacer.gif';

  render() {
    const containerStyle = {
      fontSize: 0,
      lineHeight: 0,
      height: this.props.height,
      width: this.props.width,
    };

    if (this.props.background) {
      containerStyle.background = this.props.background;
    }

    return (
      <div style={containerStyle}>
        <Image
          className={this.props.className}
          src={`${this.props.imageBase}/${Spacer.image}`}
          width={this.props.width}
          height={this.props.height}
          style={{ height: this.props.height }} alt="" />
      </div>
    );
  }
}

export default Spacer;
