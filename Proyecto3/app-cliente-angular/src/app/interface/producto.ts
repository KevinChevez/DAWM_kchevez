import { Categoria } from './categoria';

export interface Producto {
  producto_id: number;
  categoria_id: number;
  producto_name: string;
  producto_descript: string;
  producto_price: number;
  producto_src_img: string;
  producto_rate: number;
  producto_hora_start: string;
  producto_hora_end: string;
  categorium: Categoria;
}
