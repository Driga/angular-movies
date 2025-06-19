import { MovieListComponent } from './movie-list.component';
import { MovieModel } from '../../models/movie.model';

describe('MovieListComponent', () => {
  let component: MovieListComponent;

  beforeEach(() => {
    component = new MovieListComponent();
  });

  it('should emit openMovie event with selected movie', () => {
    // Arrange
    // Basically mock services and mock data should be extracted in separate mock files and reused across project.
    const movie: MovieModel = {
      id: 1,
      title: 'Inception',
      overview: 'A dream within a dream.',
      poster_path: '/some-path.jpg',
      release_date: '2010-07-16',
      vote_average: '8.8',
      vote_count: 123456,
      original_language: 'en',
      budget: 3000000,
      tagline: 'Horror'
    };

    const emitSpy = jest.fn();
    component.openMovie.subscribe(emitSpy);

    // Act
    component.onOpenMovie(movie);

    // Assert
    expect(emitSpy).toHaveBeenCalledWith(movie);
  });
});
