import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../service/producto.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nombre'];
  dataSource = [];

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.productoService.obtenerProductos().subscribe(respuesta => {
      this.dataSource = respuesta as any;
    })
  }

}
