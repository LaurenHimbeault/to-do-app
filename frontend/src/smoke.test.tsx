import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

function Hello() {
  return <h1>Hello</h1>;
}

test('renders', () => {
  render(<Hello />);
  expect(screen.getByText('Hello')).toBeInTheDocument();
});
