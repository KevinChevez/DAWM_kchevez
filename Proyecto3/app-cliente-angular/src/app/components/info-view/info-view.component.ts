import { FormControl } from '@angular/forms';
import { ProductoService } from './../../services/producto/producto.service';
import { Producto } from './../../interface/producto';
import { UsuarioService } from './../../services/usuario/usuario.service';
import { FbUserinfo } from './../../interface/fb-userinfo';
import { FirebaseService } from './../../services/dbnr_firebase/firebase.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/interface/cliente';

@Component({
  selector: 'app-info-view',
  templateUrl: './info-view.component.html',
  styleUrls: ['./info-view.component.css']
})
export class InfoViewComponent implements OnInit {
  selecciones = new FormControl('');
  fbUsers: Array<FbUserinfo> = [];
  fbUsersFiltered: Array<FbUserinfo> = [];
  clientes: Array<Cliente> = [];
  productos: Array<Producto> = [];
  cliente: Cliente  = {
    cliente_id: 0,
    cliente_fname: '',
    cliente_lname: '',
    cliente_address: '',
    cliente_rate: 0,
    cliente_ncomment: 0,
    cliente_nliked: 0,
    firebase_id: '',
    img_perfil_name: '',
    telefonos_compradores: [],
    pedidos: [],
  };

  constructor(private firebaseService: FirebaseService, private userService: UsuarioService, private productoServive: ProductoService) { }

  ngOnInit(): void {
    this.setDataFB();
    this.setProductos();
  }

  setDataFB(){
    this.userService.getDataFirebase().subscribe(response => {
      console.log(response);
      this.fbUsers = response as Array<FbUserinfo>;
    })
  }

  setProductos(){
    this.productoServive.obtenerProductos().subscribe((response => {
      this.productos = response as Array<Producto>;
    }))
  }

  setFbUsersFiltered(fbUsers: Array<FbUserinfo>, subArrProd: any){
    console.log(subArrProd);
    this.fbUsersFiltered = fbUsers.filter((user) => {
      return this.hasSubArray(user.productos_favoritos, subArrProd);
    }) as Array<FbUserinfo>;
    console.log(this.fbUsersFiltered)
    // this.userService.getClientById(id).subscribe((response) => {
    //   console.log(response);
    //   this.cliente = response as Cliente;
    //   return response;
    // });
  }

  hasSubArray(master: any, sub: any) {
    return sub.every((elem: any) => master.includes(elem));
  }
}
