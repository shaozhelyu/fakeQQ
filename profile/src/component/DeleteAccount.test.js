import DeleteAccount from './DeleteAccount';
import userEvent from '@testing-library/user-event';
import { render, screen, act } from '@testing-library/react';

test('Account delete', async () => {
  render(<DeleteAccount />);
  await userEvent.type(screen.getByTestId('deletePass'), 'hello');
  await act(async () => {
    await userEvent.click(screen.getByTestId('deletePassSub'));
  });
  expect(screen.getByText(/Success/)).toBeInTheDocument();
});
