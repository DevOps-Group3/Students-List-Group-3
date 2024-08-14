import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the correct header', () => {
  render(<App />);
  const headerElement = screen.getByText(/DevOps Tools and Practices 03: Group 3/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders student names and IDs', () => {
  render(<App />);
  const student1 = screen.getByText(/Yubraj Rai - C0899391/i);
  const student2 = screen.getByText(/Roshan Shrestha - C0901142/i);
  const student3 = screen.getByText(/Fuchun Li - C0901297/i);
  const student4 = screen.getByText(/Pauline Balamores - C0901339/i);
  const student5 = screen.getByText(/Piyumika Samarasuriyage - C0900440/i);

  expect(student1).toBeInTheDocument();
  expect(student2).toBeInTheDocument();
  expect(student3).toBeInTheDocument();
  expect(student4).toBeInTheDocument();
  expect(student5).toBeInTheDocument();
});
