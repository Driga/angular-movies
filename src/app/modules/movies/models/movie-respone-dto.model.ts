import { MovieModel } from './movie.model';

export interface MovieResponeDTO {
  page: number;
  total_pages: number;
  results: MovieModel[];
}
