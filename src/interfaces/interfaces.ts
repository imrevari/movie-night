export interface Movie {
  adult?: boolean;
  id: number;
  original_language?: string;
  original_title?: string;
  overview: string;
  popularity?: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  vote_average: number;
  vote_count: number;
}

export interface FetchMoviesResponse {
  movies: Movie[];
  cacheHit: number;
  totalPages: number;
}
