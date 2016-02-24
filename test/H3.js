import React from 'react';
import { expect } from 'chai';
import { render, shallow } from 'enzyme';
import { H3, Textbox } from '../dist/react-email-blueprints.js';

describe('<H3 />', () => {
  it('is instantiable', () => {
    const wrapper = render(<H3 />);
    expect(wrapper).to.not.equal(null);
  });

  it('has correct default values', () => {
    const wrapper = render(<H3 />);
    expect(wrapper.find('div.h3').length).to.equal(1);
  });

  it('contains <Textbox />', () => {
    const expected = <Textbox className="h3" style={H3.defaultStyle}>Hello</Textbox>;

    const wrapper = shallow(<H3>Hello</H3>);
    expect(wrapper.contains(expected)).to.equal(true);
  });

  it('passes through children', () => {
    const wrapper = render(<H3><span /></H3>);
    expect(wrapper.find('div.h3').length).to.equal(1);
    expect(wrapper.find('span').length).to.equal(1);
  });
});
