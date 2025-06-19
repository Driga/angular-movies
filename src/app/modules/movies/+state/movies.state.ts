import { Injectable } from '@angular/core';
import { Action, State, StateContext, StateToken, Store } from '@ngxs/store';
import { MovieModel } from '../models/movie.model';
import {
  GetMovieByIdAction,
  GetPopularMoviesAction, MovieDetailsLoaderOffAction, MovieDetailsLoaderOnAction, MovieListLoaderOffAction,
  MovieListLoaderOnAction,
  ResetMovieDetailsAction, SearchMoviesAction
} from './movies.actions';
import { catchError, tap } from 'rxjs';
import { MoviesApiService } from '../services/movies-api.service';
import { MovieRequestParams } from '../models/movie-request-params.model';
import { MovieResponeDTO } from '../models/movie-respone-dto.model';

export interface MoviesStateModel {
  movieList: MovieModel[] | null;
  movieDetails: MovieModel | null;
  listLoader: boolean;
  detailsLoader: boolean;
  currentPage: number;
  totalPages: number;
}

export const MOVIES_STATE_TOKEN = new StateToken<MoviesStateModel>('movies');

@Injectable()
@State<MoviesStateModel>({
  name: MOVIES_STATE_TOKEN,
  defaults: {
    movieList: null,
    movieDetails: null,
    listLoader: false,
    detailsLoader: false,
    currentPage: 1,
    totalPages: 1,
  },
})
export class MoviesState {

  constructor(
    private moviesApiService: MoviesApiService,
    private store: Store
  ) {
  }

  @Action(GetPopularMoviesAction)
  getPopularMoviesAction({ patchState }: StateContext<MoviesStateModel>, action: GetPopularMoviesAction) {
    this.store.dispatch(new MovieListLoaderOnAction());

    const params: MovieRequestParams = { page: action.page };

    return this.moviesApiService.getPopularMovies(params).pipe(
      tap((response: MovieResponeDTO) => {
        this.store.dispatch(new MovieListLoaderOffAction());
        patchState({
          movieList: response.results,
          currentPage: action.page,
          totalPages: response.total_pages ?? 1,
        });
      }),
      catchError(() => this.store.dispatch(new MovieListLoaderOffAction())),
    );
  }

  @Action(GetMovieByIdAction)
  public getMovieByIdAction({patchState}: StateContext<MoviesStateModel>, action: GetMovieByIdAction) {
    this.store.dispatch(new MovieDetailsLoaderOnAction());

    return this.moviesApiService.getMovieById(action.movieId).pipe(
      tap((response: MovieModel) => {
        this.store.dispatch(new MovieDetailsLoaderOffAction());
        patchState({
          movieDetails: response,
        });
      }),
      catchError(() => this.store.dispatch(new MovieDetailsLoaderOffAction())),
    );
  }

  @Action(SearchMoviesAction)
  public searchMoviesAction({patchState}: StateContext<MoviesStateModel>, action: SearchMoviesAction) {
    this.store.dispatch(new MovieListLoaderOnAction());

    return this.moviesApiService.searchMovies(action.searchQuery, action.page).pipe(
      tap((response: MovieResponeDTO) => {
        this.store.dispatch(new MovieListLoaderOffAction());
        patchState({
          movieList: response.results,
          currentPage: action.page,
          totalPages: response.total_pages ?? 1,
        });
      }),
      catchError(() => this.store.dispatch(new MovieListLoaderOffAction())),
    );
  }

  @Action(ResetMovieDetailsAction)
  public resetMovieDetailsAction({patchState}: StateContext<MoviesStateModel>) {
    patchState({
      movieDetails: null,
    });
  }

  @Action(MovieListLoaderOnAction)
  public movieListLoaderOnAction({patchState}: StateContext<MoviesStateModel>) {
    patchState({
      listLoader: true,
    });
  }

  @Action(MovieListLoaderOffAction)
  public movieListLoaderOffAction({patchState}: StateContext<MoviesStateModel>) {
    patchState({
      listLoader: false,
    });
  }

  @Action(MovieDetailsLoaderOnAction)
  public movieDetailsLoaderOnAction({patchState}: StateContext<MoviesStateModel>) {
    patchState({
      detailsLoader: true,
    });
  }

  @Action(MovieDetailsLoaderOffAction)
  public movieDetailsLoaderOffAction({patchState}: StateContext<MoviesStateModel>) {
    patchState({
      detailsLoader: false,
    });
  }

}
