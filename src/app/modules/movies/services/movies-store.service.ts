import { inject, Injectable, Signal } from '@angular/core';
import {  Store } from '@ngxs/store';
import { MovieModel } from '../models/movie.model';
import {
  GetMovieByIdAction,
  GetPopularMoviesAction,
  ResetMovieDetailsAction,
  SearchMoviesAction
} from '../+state/movies.actions';
import { MoviesSelectors } from '../+state/movis.selectors';

/**
 * MoviesStoreService
 *
 * Facade service for interacting with the NGXS store for movies.
 * Exposes reactive signals for movie data, loading states, and pagination.
 * Dispatches actions to load popular movies, search, fetch details, and reset state.
 *
 * Keeps components clean and decoupled from direct store access.
 */
@Injectable({ providedIn: 'root' })
export class MoviesStoreService {

  constructor(private store: Store) {
  }

  readonly popularMovies: Signal<MovieModel[] | null> = inject(Store).selectSignal(MoviesSelectors.popularMovies);
  readonly movieDetails: Signal<MovieModel | null> = inject(Store).selectSignal(MoviesSelectors.movieDetails);
  readonly movieListLoader: Signal<boolean> = inject(Store).selectSignal(MoviesSelectors.movieListLoader);
  readonly movieDetailsLoader: Signal<boolean> = inject(Store).selectSignal(MoviesSelectors.movieDetailsLoader);
  readonly currentPage: Signal<number> = inject(Store).selectSignal(MoviesSelectors.currentPage);
  readonly totalPages: Signal<number> = inject(Store).selectSignal(MoviesSelectors.totalPages);

  getPopularMovies(page: number = 1): void {
    this.store.dispatch(new GetPopularMoviesAction(page));
  }

  getMovieById(movieId: number): void {
    this.store.dispatch(new GetMovieByIdAction(movieId));
  }

  resetMovieDetails(): void {
    this.store.dispatch(new ResetMovieDetailsAction());
  }

  searchMovie(searchQuery: string, page: number = 1): void {
    this.store.dispatch(new SearchMoviesAction(searchQuery, page));
  }
}
