import React from 'react';
import { expect } from 'chai';
import { render } from 'enzyme';
import { Cell } from '../dist/react-email-blueprints.js';

describe('<Cell />', () => {
  it('is instantiable', () => {
    const wrapper = render(<Cell />);
    expect(wrapper).to.not.equal(null);
  });

  it('has correct default values', () => {
    const wrapper = render(<Cell />);
    expect(wrapper.find('td').length).to.equal(1);
    expect(wrapper.html()).to.equal('<td></td>');
  });

  it('passes through props', () => {
    const wrapper = render(<Cell className="hello" />);
    expect(wrapper.find('td.hello').length).to.equal(1);
    expect(wrapper.html()).to.equal('<td class="hello"></td>');
  });

  it('passes through children', () => {
    const wrapper = render(<Cell><div /></Cell>);
    expect(wrapper.find('td').length).to.equal(1);
    expect(wrapper.find('div').length).to.equal(1);
    expect(wrapper.html()).to.equal('<td><div></div></td>');
  });
});
