import React from 'react';
import { expect } from 'chai';
import { render } from 'enzyme';
import { Textbox } from '../dist/react-email-blueprints.js';

describe('<Textbox />', () => {
  it('is instantiable', () => {
    const wrapper = render(<Textbox />);
    expect(wrapper).to.not.equal(null);
  });

  it('has correct default value', () => {
    const wrapper = render(<Textbox />);
    expect(wrapper.find('div').length).to.equal(1);
  });

  it('passes through props', () => {
    const wrapper = render(<Textbox className="hello" />);
    expect(wrapper.find('div.hello').length).to.equal(1);
  });

  it('passes through children', () => {
    const wrapper = render(<Textbox><span /></Textbox>);
    expect(wrapper.find('span').length).to.equal(1);
  });
});
