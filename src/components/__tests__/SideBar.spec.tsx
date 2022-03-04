import { render, screen } from '@testing-library/react';
import { Header } from '../Header'

describe('Header Page', () => {
  it('Should change the genre', () => {
    render(<Header title="home" />);
  });
})