import { Routes } from '@angular/router';

export const routes: Routes = [
  { // No home page or dashboard so redirect to Movie route by default.
    path: '', redirectTo: 'movies', pathMatch: 'full'
  },
  { // lazy loaded route
    path: 'movies',
    loadChildren: () => import('./modules/movies/movies.routes').then((r) => r.MoviesRoutes),
  },
];
