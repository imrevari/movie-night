import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import SearchBar from '../components/movieSearch/SearchBar';
import user from '@testing-library/user-event'


const triggerSearchMock = jest.fn();


test('Searchbar lable renders properly', () => {
  render(<SearchBar triggerSearch={triggerSearchMock}/>);

  expect(screen.getAllByText(/Search for movies/)).toHaveLength(2)

});

test('Searchbar Search button calling function', async () => {
  render(<SearchBar triggerSearch={triggerSearchMock}/>);

  expect(triggerSearchMock).toHaveBeenCalledTimes(0)

  const button = await screen.getByTestId('search-button')

  fireEvent.click(button);
  expect(triggerSearchMock).toHaveBeenCalledTimes(1)
});
