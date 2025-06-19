import { Injectable, Signal } from '@angular/core';
import { MovieModel } from '../models/movie.model';
import { MoviesStoreService } from './movies-store.service';
import { MoviesModalService } from './movies-modal.service';
import { signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MoviesUiService {
  readonly popularMovies: Signal<MovieModel[] | null>;
  readonly movieListLoader: Signal<boolean>;
  readonly currentPage: Signal<number>;
  readonly totalPages: Signal<number>;
  readonly movieDetails: Signal<MovieModel | null>;
  readonly movieDetailsLoader: Signal<boolean>;
  readonly selectedMovie = signal<MovieModel | null>(null);
  searchQuery = signal('');

  constructor(
    private storeService: MoviesStoreService,
    private modalService: MoviesModalService,
  ) {
    // Bind store signals here so they can be mocked in tests
    this.popularMovies = storeService.popularMovies;
    this.movieListLoader = storeService.movieListLoader;
    this.currentPage = storeService.currentPage;
    this.totalPages = storeService.totalPages;
    this.movieDetails = storeService.movieDetails;
    this.movieDetailsLoader = storeService.movieDetailsLoader;
  }

  /** Executes a search or resets to popular movies */
  search(): void {
    const query = this.searchQuery();
    if (query) {
      this.storeService.searchMovie(query);
    } else {
      this.storeService.getPopularMovies();
    }
  }

  /** Navigates to a specific page depending on query state */
  goToPage(page: number): void {
    const query = this.searchQuery();
    if (query) {
      this.storeService.searchMovie(query, page);
    } else {
      this.storeService.getPopularMovies(page);
    }
  }

  /** Opens modal for a given movie */
  open(movie: MovieModel): void {
    this.selectedMovie.set(movie);
    this.modalService.openMovieDetailsModal({
      movieDetailsData: this.movieDetails,
      movieDetailsLoader: this.movieDetailsLoader,
      getMovieById: () => this.getMovieById(),
      movieDetailsClose: () => this.close()
    });
  }

  /** Triggers loading of movie detail */
  private getMovieById(): void {
    const movie = this.selectedMovie();
    if (movie) {
      this.storeService.getMovieById(movie.id);
    }
  }

  /** Closes modal and clears selection */
  close(): void {
    this.selectedMovie.set(null);
    this.storeService.resetMovieDetails();
  }
}
