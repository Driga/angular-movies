import { MovieDetailsComponent } from './movie-details.component';
import { MovieModalModel } from '../../models/movie-modal.model';
import { Signal } from '@angular/core';

describe('MovieDetailsComponent', () => {
  let component: MovieDetailsComponent;
  let mockData: MovieModalModel;

  beforeEach(() => {
    mockData = {
      getMovieById: jest.fn(),
      movieDetailsClose: jest.fn(),
      movieDetailsData: jest.fn() as any as Signal<any>,
    } as any;

    component = new MovieDetailsComponent(mockData);
  });

  it('should call getMovieById on ngOnInit', () => {
    component.ngOnInit();
    expect(mockData.getMovieById).toHaveBeenCalled();
  });

  it('should call movieDetailsClose on ngOnDestroy', () => {
    component.ngOnDestroy();
    expect(mockData.movieDetailsClose).toHaveBeenCalled();
  });
});
