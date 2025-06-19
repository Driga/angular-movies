import { importProvidersFrom } from '@angular/core';
import { Routes } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import { ExternalWrapperComponent } from '../../core/components/external-wrapper-component/external-wrapper.component';
import { MoviesComponent } from './containers/movies/movies.component';
import { MoviesState } from './+state/movies.state';

export const MoviesRoutes: Routes = [
  {
    path: '',
    component: ExternalWrapperComponent,
    children: [
      {
        path: '',
        component: MoviesComponent,
        providers: [
            importProvidersFrom(NgxsModule.forFeature([MoviesState]))
          ]
      },
    ],
  },
];
