import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import News from './News';

describe('News container', () => {
  it('renders a search bar header', async () => {
    render(<News />);

    // const display = screen.getByTestId('display');

    const textInput = screen.queryByPlaceholderText('what news');
    fireEvent.change(textInput, { target: { value: 'cars' } });
    expect(textInput.value).toBe('cars');
  });
});
