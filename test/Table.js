import React from 'react';
import { expect } from 'chai';
import { render } from 'enzyme';
import { Table } from '../dist/react-email-blueprints.js';

describe('<Table />', () => {
  it('is instantiable', () => {
    const wrapper = render(<Table />);
    expect(wrapper).to.not.equal(null);
  });

  it('has correct default values', () => {
    const expected = '<table cellspacing="0" cellpadding="0"><tbody></tbody></table>';

    const wrapper = render(<Table />);
    expect(wrapper.find('table').length).to.equal(1);
    expect(wrapper.find('tbody').length).to.equal(1);
    expect(wrapper.html()).to.equal(expected);
  });

  it('passes through props', () => {
    const expected = '<table class="hello" cellspacing="0" cellpadding="0"><tbody></tbody></table>';

    const wrapper = render(<Table className="hello" />);
    expect(wrapper.find('table.hello').length).to.equal(1);
    expect(wrapper.find('tbody').length).to.equal(1);
    expect(wrapper.html()).to.equal(expected);
  });

  it('passes through children', () => {
    const expected = '<table cellspacing="0" cellpadding="0"><tbody><tr></tr></tbody></table>';

    const wrapper = render(<Table><tr /></Table>);
    expect(wrapper.find('table').length).to.equal(1);
    expect(wrapper.find('tbody').length).to.equal(1);
    expect(wrapper.find('tr').length).to.equal(1);
    expect(wrapper.html()).to.equal(expected);
  });
});
