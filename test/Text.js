import React from 'react';
import { expect } from 'chai';
import { render } from 'enzyme';
import { Text } from '../dist/react-email-blueprints.js';

describe('<Text />', () => {
  it('is instantiable', () => {
    const wrapper = render(<Text />);
    expect(wrapper).to.not.equal(null);
  });

  it('has correct default values', () => {
    const wrapper = render(<Text />);
    expect(wrapper.find('div').length).to.equal(1);
  });

  it('passes through children', () => {
    const wrapper = render(<Text><span /></Text>);
    expect(wrapper.find('div').length).to.equal(1);
    expect(wrapper.find('span').length).to.equal(1);
  });
});
