import { MovieModel } from '../../models/movie.model';
import { Component, OnInit } from '@angular/core';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { NgForOf, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MovieLoaderComponent } from '../../../../shared/components/movie-loader/movie-loader.component';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';
import { MovieSearchComponent } from '../../components/movie-search/movie-search.component';
import { MoviesUiService } from '../../services/movies-ui.servce';

@Component({
  selector: 'app-movies',
  standalone: true,
  templateUrl: './movies.component.html',
  imports: [
    MovieCardComponent,
    NgForOf,
    FormsModule,
    MovieLoaderComponent,
    NgIf,
    MovieListComponent,
    MovieSearchComponent,
  ]
})
export class MoviesComponent implements OnInit {
  searchQuery: string = '';

  constructor(
    public moviesUiService: MoviesUiService
  ) {}

  ngOnInit(): void {
    this.moviesUiService.search(); // initial popular load
  }

  search(): void {
    this.moviesUiService.searchQuery.set(this.searchQuery);
    this.moviesUiService.search();
  }

  goToPage(page: number): void {
    this.moviesUiService.goToPage(page);
  }

  openMovie(movie: MovieModel): void {
    this.moviesUiService.open(movie);
  }
}
