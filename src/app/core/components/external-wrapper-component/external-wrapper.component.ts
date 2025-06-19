import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-external-wrapper',
  templateUrl: './external-wrapper.component.html',
  styleUrls: ['./external-wrapper.component.scss'],
  standalone: true,
  imports: [RouterLink, RouterOutlet],
})
export class ExternalWrapperComponent {

}
