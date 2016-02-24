import React from 'react';
import { expect } from 'chai';
import { render, shallow } from 'enzyme';
import { H2, Textbox } from '../dist/react-email-blueprints.js';

describe('<H2 />', () => {
  it('is instantiable', () => {
    const wrapper = render(<H2 />);
    expect(wrapper).to.not.equal(null);
  });

  it('has correct default values', () => {
    const wrapper = render(<H2 />);
    expect(wrapper.find('div.h2').length).to.equal(1);
  });

  it('contains <Textbox />', () => {
    const expected = <Textbox className="h2" style={H2.defaultStyle}>Hello</Textbox>;

    const wrapper = shallow(<H2>Hello</H2>);
    expect(wrapper.contains(expected)).to.equal(true);
  });

  it('passes through children', () => {
    const wrapper = render(<H2><span /></H2>);
    expect(wrapper.find('div.h2').length).to.equal(1);
    expect(wrapper.find('span').length).to.equal(1);
  });
});
