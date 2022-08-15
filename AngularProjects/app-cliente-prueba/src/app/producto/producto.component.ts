import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../service/producto.service';
import { Producto } from '../interface/producto';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  item: Producto = {
    id: -1,
    nombre: "",
    cantidad: 0,
    createdAt: "",
    updatedAt: ""
  };

  constructor(private productoService: ProductoService, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    let parametros = this.activatedRoute.snapshot.params;
    let id = parametros['id'];

    this.productoService.obtenerProductoPorId(id).subscribe((respuesta) => {
      this.item = respuesta as Producto;
    });
  }

}
