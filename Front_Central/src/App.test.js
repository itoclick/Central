import { render, screen } from '@testing-library/react';
import App from './App';

test('renders well come message', () => {
  render(<App />);
  const h3Element = screen.getByText(/Bem vinda/i);
  expect(h3Element).toBeInTheDocument();
});
