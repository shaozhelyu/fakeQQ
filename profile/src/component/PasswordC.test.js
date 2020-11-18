import PasswordC from './PasswordC';
import userEvent from '@testing-library/user-event';
import { render, screen, act } from '@testing-library/react';

test('Account Change', async () => {
  render(<PasswordC />);
  await userEvent.type(screen.getByTestId('oldPass'), 'hello');
  await userEvent.type(screen.getByTestId('newPass1'), 'kill');
  await userEvent.type(screen.getByTestId('newPass2'), 'kill');
  await act(async () => {
    await userEvent.click(screen.getByTestId('ChangeSub'));
  });
  await act(async () => {
    await userEvent.click(screen.getByTestId('CloseModal'));
  });
  expect(screen.getByText(/UserName/)).toBeInTheDocument();
});
test('Password Wrong', async () => {
  render(<PasswordC />);
  await userEvent.type(screen.getByTestId('oldPass'), 'hi');
  await userEvent.type(screen.getByTestId('newPass1'), 'kill');
  await userEvent.type(screen.getByTestId('newPass2'), 'kill');
  await act(async () => {
    await userEvent.click(screen.getByTestId('ChangeSub'));
  });
  // await act(async () => {
  //   await userEvent.click(screen.getByTestId('CloseModal'));
  // });
  expect(screen.getByText(/wrong password/)).toBeInTheDocument();
});
test('Does not Match', async () => {
  render(<PasswordC />);
  await userEvent.type(screen.getByTestId('oldPass'), 'hello');
  await userEvent.type(screen.getByTestId('newPass1'), 'kll');
  await userEvent.type(screen.getByTestId('newPass2'), 'kill');
  await act(async () => {
    await userEvent.click(screen.getByTestId('ChangeSub'));
  });
  // await act(async () => {
  //   await userEvent.click(screen.getByTestId('CloseModal'));
  // });
  expect(screen.getByText(/Two new password/)).toBeInTheDocument();
});
