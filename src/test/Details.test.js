import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import Details from '../components/Details';
import store from '../store/ConfigureStore';

afterEach(cleanup);

describe('Details component', () => {
  it('should render the component', () => {
    const wrapper = render(
      <Provider store={store}>
        <MemoryRouter>
          <Details />
        </MemoryRouter>
      </Provider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
