import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link to learn', () => {
  render(<App />);
  const linkElement = screen.getByText(/String Calculator/i);
  expect(linkElement).toBeInTheDocument();
});
