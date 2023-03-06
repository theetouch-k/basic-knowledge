import { render, screen } from '@testing-library/react';
import App from './App';

test('renders urn stock link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Urn Stock/i);
  expect(linkElement).toBeInTheDocument();
});
