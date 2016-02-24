import React, { Component, PropTypes } from 'react';
import Image from './Image';

class Logo extends Component {
  static propTypes = {
    imageBase: PropTypes.string,
  };

  static defaultProps = {
    imageBase: '',
  };

  static image = 'logo.png';

  render() {
    const styles = {
      fontSize: 0,
      lineHeight: 0,
      textAlign: 'center',
    };

    return (
      <div className="img-center" style={styles}>
        <Image border="0" src={`${this.props.imageBase}/${Logo.image}`} />
      </div>
    );
  }
}

export default Logo;
