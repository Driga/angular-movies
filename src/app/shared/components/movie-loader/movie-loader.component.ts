import { Component } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-movie-loader',
  imports: [
    MatProgressSpinnerModule
  ],
  standalone: true,
  templateUrl: './movie-loader.component.html',
  styleUrl: './movie-loader.component.scss'
})
export class MovieLoaderComponent {

}
