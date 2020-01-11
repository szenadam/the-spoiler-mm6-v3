import React from 'react';
import { shallow } from 'enzyme';
import QuestTagGenerator from './QuestTagGenerator';


it('renders without crashing', () => {
  const location = 'foo'
  const wrapper = shallow(<QuestTagGenerator location={location} />);
  expect(wrapper.text()).toEqual('foo');
});

it('wraps question string with anchor tag when it is at the end of the strign', () => {
  const location = 'foo quest 3'
  const wrapper = shallow(<QuestTagGenerator location={location} />);
  expect(wrapper.html()).toEqual('foo <a href="#q_3">quest 3</a>');
});