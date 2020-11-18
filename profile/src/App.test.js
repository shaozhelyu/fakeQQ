import { render, screen, act } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Registeration/);
  expect(linkElement).toBeInTheDocument();
});

describe('Button Click', () => {
  test('Change click', async () => {
    render(<App />);
    await act(async () => {
      await userEvent.click(screen.getByTestId('changePass'));
    });
    expect(screen.getByText(/Old Password/)).toBeInTheDocument();
  });
  test('Delete click', async () => {
    render(<App />);
    await act(async () => {
      await userEvent.click(screen.getByTestId('deleteAcc'));
    });
    expect(screen.getByText(/Warning/)).toBeInTheDocument();
  });
});
