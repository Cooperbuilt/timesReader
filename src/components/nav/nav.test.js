import React from 'react';
import Nav from './nav';
import { shallow } from 'enzyme';

describe('<Nav />', () => {
  it('renders 1 <Nav /> component', () => {
    const component = shallow(<Nav />);
    expect(component).toHaveLength(1);
  })
});
