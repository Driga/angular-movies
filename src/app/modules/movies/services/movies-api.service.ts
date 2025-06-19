import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieRequestParams } from '../models/movie-request-params.model';
import { MovieResponeDTO } from '../models/movie-respone-dto.model';
import { MovieModel } from '../models/movie.model';

@Injectable({ providedIn: 'root' })
export class MoviesApiService {
  private apiKey = '320c22fedf46d4f62599ac7abf3b1f28';
  private baseUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

  getPopularMovies(params: MovieRequestParams): Observable<MovieResponeDTO> {
    return this.http.get<MovieResponeDTO>(`${this.baseUrl}/movie/popular`, {
      params: {
        api_key: this.apiKey,
        page: params.page,
      }
    });
  }

  getMovieById(movieId: number): Observable<MovieModel> {
    return this.http.get<MovieModel>(`${this.baseUrl}/movie/${movieId}`, {
      params: {
        api_key: this.apiKey,
      }
    });
  }

  searchMovies(searchQuery: string, page: number): Observable<MovieResponeDTO> {
    return this.http.get<MovieResponeDTO>(`${this.baseUrl}/search/movie`, {
      params: {
        api_key: this.apiKey,
        query: searchQuery || '',
        page,
      }
    });
  }
}
