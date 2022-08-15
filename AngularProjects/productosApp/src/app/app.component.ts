import { Component } from '@angular/core';
import { ProductoService } from './servicio/producto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'productosApp';

  constructor(private productoService: ProductoService) {}
}
