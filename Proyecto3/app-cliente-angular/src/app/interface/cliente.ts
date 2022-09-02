export interface Cliente {
  cliente_id: number;
  cliente_fname: string;
  cliente_lname: string;
  cliente_address: string;
  cliente_rate: number;
  cliente_ncomment: number;
  cliente_nliked: number;
  firebase_id: string;
  img_perfil_name: string;
  telefonos_compradores: any[];
  pedidos: any[];
}
