import { Producto } from './producto';
export interface FbUserinfo {
  ciudad_recomendada: string,
  fecha_compra: string,
  id: number,
  nombre_recomendador: any,
  num_gustados: number,
  num_problemas: string,
  productos_favoritos: string[],
}
