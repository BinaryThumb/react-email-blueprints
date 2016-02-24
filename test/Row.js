import React from 'react';
import { expect } from 'chai';
import { render } from 'enzyme';
import { Row } from '../dist/react-email-blueprints.js';

describe('<Row />', () => {
  it('is instantiable', () => {
    const wrapper = render(<Row />);
    expect(wrapper).to.not.equal(null);
  });

  it('has correct default values', () => {
    const wrapper = render(<Row />);
    expect(wrapper.find('tr').length).to.equal(1);
    expect(wrapper.html()).to.equal('<tr></tr>');
  });

  it('passes through props', () => {
    const wrapper = render(<Row className="hello" />);
    expect(wrapper.find('tr.hello').length).to.equal(1);
    expect(wrapper.html()).to.equal('<tr class="hello"></tr>');
  });

  it('passes through children', () => {
    const wrapper = render(<Row><td /></Row>);
    expect(wrapper.find('tr').length).to.equal(1);
    expect(wrapper.find('td').length).to.equal(1);
    expect(wrapper.html()).to.equal('<tr><td></td></tr>');
  });
});
