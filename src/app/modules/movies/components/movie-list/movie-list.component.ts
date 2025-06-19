import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { MovieLoaderComponent } from '../../../../shared/components/movie-loader/movie-loader.component';
import { NgForOf, NgIf } from '@angular/common';
import { MovieModel } from '../../models/movie.model';

@Component({
  selector: 'app-movie-list',
  imports: [
    MovieCardComponent,
    MovieLoaderComponent,
    NgForOf,
    NgIf
  ],
  standalone: true,
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss'
})
export class MovieListComponent {
  @Input() movieList: MovieModel[] | null = null
  @Input() movieListLoader: boolean = false;
  @Output() openMovie = new EventEmitter<MovieModel>();

  onOpenMovie(movie: MovieModel): void {
    this.openMovie.emit(movie);
  }
}
