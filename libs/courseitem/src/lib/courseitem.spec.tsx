import { render } from '@testing-library/react';

import Courseitem from './courseitem';

describe('Courseitem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Courseitem />);
    expect(baseElement).toBeTruthy();
  });
});
