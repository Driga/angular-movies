import { MoviesStoreService } from './movies-store.service';
import { MoviesModalService } from './movies-modal.service';
import { signal } from '@angular/core';
import { MovieModel } from '../models/movie.model';
import { MoviesUiService } from './movies-ui.servce';

describe('MoviesUiService', () => {
  let service: MoviesUiService;
  let store: jest.Mocked<MoviesStoreService>;
  let modal: jest.Mocked<MoviesModalService>;

  const mockMovie: MovieModel = {
    id: 1,
    title: 'Test Movie',
    overview: 'A test movie',
    poster_path: '/poster.jpg'
  } as any;

  beforeEach(() => {
    store = {
      popularMovies: signal([]),
      movieListLoader: signal(false),
      currentPage: signal(1),
      totalPages: signal(5),
      movieDetails: signal(mockMovie),
      movieDetailsLoader: signal(false),
      searchMovie: jest.fn(),
      getPopularMovies: jest.fn(),
      getMovieById: jest.fn(),
      resetMovieDetails: jest.fn(),
    } as unknown as jest.Mocked<MoviesStoreService>;

    modal = {
      openMovieDetailsModal: jest.fn(),
    } as unknown as jest.Mocked<MoviesModalService>;

    service = new MoviesUiService(store, modal);
  });

  it('should call store.searchMovie when query is set', () => {
    service.searchQuery.set('test');
    service.search();
    expect(store.searchMovie).toHaveBeenCalledWith('test');
  });

  it('should call store.getPopularMovies when query is empty', () => {
    service.searchQuery.set('');
    service.search();
    expect(store.getPopularMovies).toHaveBeenCalled();
  });

  it('should call store.searchMovie with page when query is set', () => {
    service.searchQuery.set('test');
    service.goToPage(3);
    expect(store.searchMovie).toHaveBeenCalledWith('test', 3);
  });

  it('should call store.getPopularMovies with page when query is empty', () => {
    service.searchQuery.set('');
    service.goToPage(2);
    expect(store.getPopularMovies).toHaveBeenCalledWith(2);
  });

  it('should open modal with correct data on open()', () => {
    service.open(mockMovie);
    expect(modal.openMovieDetailsModal).toHaveBeenCalled();
    const data = modal.openMovieDetailsModal.mock.calls[0][0];
    expect(data.movieDetailsData()).toEqual(mockMovie);
  });

  it('should reset selectedMovie and movieDetails on close()', () => {
    service.selectedMovie.set(mockMovie);
    service.close();
    expect(service.selectedMovie()).toBeNull();
    expect(store.resetMovieDetails).toHaveBeenCalled();
  });

  it('should call store.getMovieById when movie is selected', () => {
    service.selectedMovie.set(mockMovie);
    // @ts-ignore: test access to private method
    service['getMovieById']();
    expect(store.getMovieById).toHaveBeenCalledWith(mockMovie.id);
  });

  it('should not call getMovieById if selectedMovie is null', () => {
    service.selectedMovie.set(null);
    // @ts-ignore: test access to private method
    service['getMovieById']();
    expect(store.getMovieById).not.toHaveBeenCalled();
  });
});
