import React from 'react';
import { expect } from 'chai';
import { render } from 'enzyme';
import { Image } from '../dist/react-email-blueprints.js';

describe('<Image />', () => {
  it('is instantiable', () => {
    const wrapper = render(<Image />);
    expect(wrapper).to.not.equal(null);
  });

  it('has correct default values', () => {
    const wrapper = render(<Image />);
    expect(wrapper.find('img').length).to.equal(1);
    expect(wrapper.html()).to.equal('<img>');
  });

  it('passes through props', () => {
    const wrapper = render(<Image className="hello" />);
    expect(wrapper.find('img.hello').length).to.equal(1);
    expect(wrapper.html()).to.equal('<img class="hello">');
  });
});
