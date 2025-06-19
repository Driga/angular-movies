import { MovieModel } from './movie.model';
import { Signal } from '@angular/core';

export interface MovieModalModel {
  movieDetailsData: Signal<MovieModel | null>;
  movieDetailsLoader: Signal<boolean>;
  getMovieById: () => void;
  movieDetailsClose: () => void;
}
