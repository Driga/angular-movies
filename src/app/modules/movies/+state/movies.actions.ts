export class GetPopularMoviesAction {
  public static readonly type = '[Movies] get popular movies';
  constructor(public page: number = 1) {}
}

export class GetMovieByIdAction {
  public static readonly type = '[Movies] get movie details by id';
  constructor(public movieId: number) {}
}

export class ResetMovieDetailsAction {
  public static readonly type = '[Movies] reset movie details';
}

export class MovieListLoaderOnAction {
  public static readonly type = '[Movies] movie list loader on';
}

export class MovieListLoaderOffAction {
  public static readonly type = '[Movies] movie list loader off';
}

export class MovieDetailsLoaderOnAction {
  public static readonly type = '[Movies] movie details loader on';
}

export class MovieDetailsLoaderOffAction {
  public static readonly type = '[Movies] movie details loader off';
}

export class SearchMoviesAction {
  public static readonly type = '[Movies] search movies';
  constructor(public searchQuery: string, public page: number = 1) {}
}
