import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MovieModel } from '../../models/movie.model';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatTooltipModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieCardComponent {
  @Input() movie: MovieModel | null = null
  @Output() open = new EventEmitter<void>();
}
