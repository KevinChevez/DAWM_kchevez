import { Component } from '@angular/core';
import { FuenteService } from './services/fuente.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'taller4-kchevez';
  constructor(private fuenteService: FuenteService){}
}
