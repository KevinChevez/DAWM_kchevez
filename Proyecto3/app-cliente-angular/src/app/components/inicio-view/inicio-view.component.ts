import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../services/categoria.service';

// Interfaces a usar
import { Producto } from '../../interface/producto';
import { Categoria } from '../../interface/categoria';

@Component({
  selector: 'app-inicio-view',
  templateUrl: './inicio-view.component.html',
  styleUrls: ['./inicio-view.component.css']
})
export class InicioViewComponent implements OnInit {
  seleccion: number = 0;
  categorias: Categoria[];

  constructor(private categoriaService: CategoriaService){
    // Inicializo por defecto el arreglo de categorias
    this.categorias = [] as Categoria[]
    for (let i = 0; i < 3; i++) {
      this.categorias[i] = {
        categoria_id: -1,
        categoria_name: "",
        categoria_descript: "",
        categoria_min_price: -1,
        categoria_max_price: -1,
        categoria_src_img: "",
        categoria_prom_rate: -1,
        categoria_hora_start: "",
        categoria_hora_end: "",
        categoria_liked: -1,
        productos: [] as Producto[],
      }
    }
  }

  ngOnInit(): void {
    this.categoriaService.obtenerCategorias().subscribe(respuesta => {
      var arr_categorias = respuesta as Categoria[];
      this.categorias = arr_categorias;
      console.log(this.categorias);
    })
  }

}
