import { ChangeDetectionStrategy, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MovieModalModel } from '../../models/movie-modal.model';
import { CurrencyPipe, NgIf } from '@angular/common';
import { MovieLoaderComponent } from '../../../../shared/components/movie-loader/movie-loader.component';

@Component({
  selector: 'app-movie-details',
  imports: [
    MovieLoaderComponent,
    NgIf,
    CurrencyPipe
  ],
  standalone: true,
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieDetailsComponent implements OnInit, OnDestroy {
  constructor(@Inject(MAT_DIALOG_DATA) public data: MovieModalModel) {
  }

  ngOnInit() {
    this.data.getMovieById();
  }

  ngOnDestroy() {
    this.data.movieDetailsClose();
  }
}
