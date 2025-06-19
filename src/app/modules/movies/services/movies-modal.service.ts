import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MovieDetailsComponent } from '../components/movie-details/movie-details.component';
import { MovieModalModel } from '../models/movie-modal.model';

/**
 * MoviesModalService
 *
 * Provides a simple API to open the movie details modal using Angular Material Dialog.
 * Accepts modal data and injects it into the MovieDetailsComponent.
 * Can be extended with other modal methods for example edit, preview, delete other data from this module.
 */
@Injectable({
  providedIn: 'root',
})
export class MoviesModalService {
  constructor(
    private matDialog: MatDialog,
  ) {
  }

  openMovieDetailsModal(modalData: MovieModalModel,) {
    this.matDialog.open(MovieDetailsComponent, {
      data: modalData,
      maxWidth: '800px',
    });
  }
}
