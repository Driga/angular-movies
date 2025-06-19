import { Selector } from '@ngxs/store';
import { MOVIES_STATE_TOKEN, MoviesStateModel } from './movies.state';
import { MovieModel } from '../models/movie.model';

export class MoviesSelectors {
  @Selector([MOVIES_STATE_TOKEN])
  public static popularMovies(state: MoviesStateModel): MovieModel[] | null {
    return state.movieList;
  }

  @Selector([MOVIES_STATE_TOKEN])
  public static movieDetails(state: MoviesStateModel): MovieModel | null {
    return state.movieDetails;
  }

  @Selector([MOVIES_STATE_TOKEN])
  static movieListLoader(state: MoviesStateModel): boolean {
    return state.listLoader;
  }

  @Selector([MOVIES_STATE_TOKEN])
  static movieDetailsLoader(state: MoviesStateModel): boolean {
    return state.detailsLoader;
  }

  @Selector([MOVIES_STATE_TOKEN])
  static currentPage(state: MoviesStateModel): number {
    return state.currentPage;
  }

  @Selector([MOVIES_STATE_TOKEN])
  static totalPages(state: MoviesStateModel): number {
    return state.totalPages;
  }

}
