import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import ErrorMessage from '../../../src/app/components/Util/ErrorMessage';

describe('ErrorMessage component', () => {
  const error = {
    message: 'test_error',
  };
  const onErrorReset = jest.fn();

  it('renders correctly', () => {
    const tree = renderer.create(
      <ErrorMessage error={error} onErrorReset={onErrorReset} />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('calls onErrorReset when alert is closed', () => {
    const component = mount(<ErrorMessage error={error} onErrorReset={onErrorReset} />);

    component.find('button').simulate('click');

    expect(onErrorReset).toHaveBeenCalled();
  });
});
