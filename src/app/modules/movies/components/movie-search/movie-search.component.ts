import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-movie-search',
  imports: [
    FormsModule,
    MatButtonModule,
  ],
  standalone: true,
  templateUrl: './movie-search.component.html',
  styleUrl: './movie-search.component.scss'
})
export class MovieSearchComponent {
  @Input() value: string = '';
  @Input() placeholder: string = 'Search movies...';
  @Output() valueChange = new EventEmitter<string>();
  @Output() search = new EventEmitter<void>();

  onSearch(): void {
    this.valueChange.emit(this.value);
    this.search.emit();
  }
}
