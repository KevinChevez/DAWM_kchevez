import { ActivatedRoute } from '@angular/router';
import { CategoriaService } from '../../services/categoria.service';
import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../interface/categoria';
import { Producto } from '../../interface/producto';

@Component({
  selector: 'app-ordenes-view',
  templateUrl: './ordenes-view.component.html',
  styleUrls: ['./ordenes-view.component.css'],
})
export class OrdenesViewComponent implements OnInit {
  categorias: Categoria[];
  categSelected: string = '';
  idProdSelected: string = '';
  srcImage: string = '';

  constructor(
    private categoriaService: CategoriaService,
    private activatedRoute: ActivatedRoute
  ) {
    // Inicializo por defecto el arreglo de categorias
    this.categorias = [] as Categoria[];

    for (let i = 0; i < 3; i++) {
      this.categorias[i] = {
        categoria_id: -1,
        categoria_name: '',
        categoria_descript: '',
        categoria_min_price: -1,
        categoria_max_price: -1,
        categoria_src_img: '',
        categoria_prom_rate: -1,
        categoria_hora_start: '',
        categoria_hora_end: '',
        categoria_liked: -1,
        productos: [] as Producto[],
      };
    }
  }

  ngOnInit(): void {
    this.categoriaService.obtenerCategorias().subscribe((respuesta) => {
      this.categorias = respuesta as Categoria[];
    });

    // Obtengo el paramtro string que me indicara la categoria que fue seleccionada y lo
    // setteo en la variable de clase categSelected
    const categoriaSelected = this.activatedRoute.snapshot.paramMap.get('categoria');
    const productoSelected = this.activatedRoute.snapshot.paramMap.get('id');
    if (categoriaSelected) {
      this.categSelected = categoriaSelected;
    }
    if (productoSelected) {
      this.idProdSelected = productoSelected;
    }
  }

  getSrcImage(idProd: string, nameCateg: string, categoria: Categoria): string {
    let src_image = '';
    if (categoria.categoria_name == nameCateg) {
      if (idProd == '') {
        return categoria.categoria_src_img;
      }
      const arrProds = categoria.productos;
      for (const producto of arrProds) {
        if (producto.producto_id.toString() == idProd) {
          src_image = producto.producto_src_img;
        }
      }
    }
    return src_image;
  }

  setSrcImage(src: string) {
    this.srcImage = src;
    console.log(src, '-', this.srcImage);
  }
}
