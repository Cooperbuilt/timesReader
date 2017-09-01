import React from 'react';
import DataContainer from './dataContainer';
import { shallow } from 'enzyme';

describe('<DataContainer />', () => {
  it('renders 1 <DataContainer /> component', () => {
    const component = shallow(<DataContainer />);
    expect(component).toHaveLength(1);
  })
});
