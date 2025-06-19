import { MovieSearchComponent } from './movie-search.component';

describe('MovieSearchComponent (class only)', () => {
  let component: MovieSearchComponent;

  beforeEach(() => {
    component = new MovieSearchComponent();
  });

  it('should emit valueChange and search when onSearch is called', () => {
    // Arrange
    const emittedValues: string[] = [];
    let searchEmitted = false;

    component.value = 'search query';

    component.valueChange.subscribe(value => emittedValues.push(value));
    component.search.subscribe(() => searchEmitted = true);

    // Act
    component.onSearch();

    // Assert
    expect(emittedValues).toEqual(['search query']);
    expect(searchEmitted).toBeTruthy();
  });
});
