import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import SearchBar from '../components/movieSearch/SearchBar';
import user from '@testing-library/user-event'
import PopupWindow from '../components/movieSearch/PopupWindow';


const closePopupMock = jest.fn();

const movie = {
    id: 1,
    overview: 'Lorem ipsum...',
    poster_path: null,
    release_date: '2021-12-15',
    title: 'Test Movie',
    vote_average: 1,
    vote_count: 1
}


test('Test PopupWindow render of title, year and rating', () => {
  render(<PopupWindow isOpen={true} closePopup={closePopupMock} movie={movie}/>);

  expect(screen.getAllByText(/Avarage vote: 1.00 based on 1 votes/)).toHaveLength(1)
  expect(screen.getAllByText(/Year released: 2021/)).toHaveLength(1)
  expect(screen.getAllByText(/Test Movie/)).toHaveLength(1)

});

test('Test PopupWindow click on Close', async () => {
    render(<PopupWindow isOpen={true} closePopup={closePopupMock} movie={movie}/>);
    expect(closePopupMock).toHaveBeenCalledTimes(0)
    const button = await screen.getByTestId('popup-close-button')

    fireEvent.click(button);
  
    expect(closePopupMock).toHaveBeenCalledTimes(1)
  
  });