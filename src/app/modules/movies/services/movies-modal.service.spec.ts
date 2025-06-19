import { MoviesModalService } from './movies-modal.service';
import { MatDialog } from '@angular/material/dialog';
import { MovieDetailsComponent } from '../components/movie-details/movie-details.component';
import { MovieModalModel } from '../models/movie-modal.model';

describe('MoviesModalService', () => {
  let service: MoviesModalService;
  let matDialogMock: jest.Mocked<MatDialog>;

  beforeEach(() => {
    matDialogMock = {
      open: jest.fn()
    } as unknown as jest.Mocked<MatDialog>;

    service = new MoviesModalService(matDialogMock);
  });

  it('should open MovieDetailsComponent with provided modalData', () => {
    const modalData: MovieModalModel = {
      getMovieById: jest.fn(),
      movieDetailsClose: jest.fn(),
      movieDetailsData: jest.fn() as any,
      movieDetailsLoader: jest.fn() as any
    };

    service.openMovieDetailsModal(modalData);

    expect(matDialogMock.open).toHaveBeenCalledWith(MovieDetailsComponent, {
      data: modalData,
      maxWidth: '800px',
    });
  });
});
