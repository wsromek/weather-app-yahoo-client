import React from 'react';
import renderer from 'react-test-renderer';
import LoadingMask from '../../../src/app/components/Util/LoadingMask';

describe('LoadingMask component', () => {
  it('renders correctly', () => {
    const present = renderer.create(
      <LoadingMask loading />,
    ).toJSON();

    const absent = renderer.create(
      <LoadingMask loading={false} />,
    ).toJSON();

    expect(present).toMatchSnapshot();
    expect(absent).toMatchSnapshot();
  });
});
