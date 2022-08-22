import { Producto } from './producto';

export interface Categoria {
  categoria_id: number;
  categoria_name: string;
  categoria_descript: string;
  categoria_min_price: number;
  categoria_max_price: number;
  categoria_src_img: string;
  categoria_prom_rate: number;
  categoria_hora_start: string;
  categoria_hora_end: string;
  categoria_liked: number;
  productos: Producto[]
}
