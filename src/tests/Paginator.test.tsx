import { render, screen } from '@testing-library/react';
import Paginator from '../components/movieSearch/Paginator';


const setPageMock = jest.fn();


test('Test Paginator: selected button is aria-current', () => {
  render(<Paginator pages={5} setPage={setPageMock} curentPage={1}/>);

  const buttonOne = screen.getByText('1')
  const buttonFive = screen.getByText('5')

  expect(buttonOne.getAttribute('aria-current')).toBe('true');
  expect(buttonFive.getAttribute('aria-current')).toBe(null);

});
