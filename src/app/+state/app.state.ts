import { Injectable } from '@angular/core';
import { State, StateToken } from '@ngxs/store';

export interface AppStateModel {
  appLoading?: boolean;
}

export const APP_STATE_TOKEN = new StateToken<AppStateModel>('app');

@Injectable({
  providedIn: 'root',
})
@State<AppStateModel>({
  name: APP_STATE_TOKEN,
  defaults: {
    appLoading: false,
  },
})
export class AppState {
  constructor(
  ) {}

}
