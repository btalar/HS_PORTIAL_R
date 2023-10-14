import { act, screen, waitFor } from '@testing-library/react';

import { tpRender } from '../../tests';
import { Login } from './Login';

const TestComponent = () => (

  <Login />

);
describe('Login', () => {
  it('renders without errors', async () => {
    act(() => {
      tpRender(<TestComponent />);
    });

    await waitFor(() => {
      expect(screen.getByTestId('login-page-wrapper')).toBeInTheDocument();
    });
  });
});
