import React from 'react';
import { expect } from 'chai';
import { render } from 'enzyme';
import { Spacer } from '../dist/react-email-blueprints.js';

describe('<Spacer />', () => {
  it('is instantiable', () => {
    const wrapper = render(<Spacer />);
    expect(wrapper).to.not.equal(null);
  });

  it('contains div wrapper', () => {
    const wrapper = render(<Spacer />);
    expect(wrapper.find('div[style]').length).to.equal(1);
  });
});
