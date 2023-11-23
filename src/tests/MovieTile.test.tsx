import { render, screen } from '@testing-library/react';
import MovieTile from '../components/movieSearch/MovieTile';

const movie = {
    id: 1,
    overview: 'Lorem ipsum...',
    poster_path: null,
    release_date: '2021-12-15',
    title: 'Test Movie',
    vote_average: 1,
    vote_count: 1
}


test('Test Movie Tile renders title', () => {
  render(<MovieTile movie={movie}/>);

  expect(screen.getAllByText(/Test Movie/)).toHaveLength(1)

});
