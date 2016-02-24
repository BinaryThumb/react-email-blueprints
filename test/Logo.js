import React from 'react';
import { expect } from 'chai';
import { render, shallow } from 'enzyme';
import { Logo, Image } from '../dist/react-email-blueprints.js';

describe('<Logo />', () => {
  it('is instantiable', () => {
    const wrapper = render(<Logo />);
    expect(wrapper).to.not.equal(null);
  });

  it('contains div wrapper', () => {
    const wrapper = render(<Logo />);
    expect(wrapper.find('div.img-center').length).to.equal(1);
  });

  it('contains <Image />', () => {
    const wrapper = shallow(<Logo />);
    // TODO: I'd really like not to hardcode the logo image
    expect(wrapper.contains(<Image border="0" src="/logo.png" />)).to.equal(true);
  });
});
