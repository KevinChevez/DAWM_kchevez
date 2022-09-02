import { Cliente } from './../../interface/cliente';
import { UsuarioService } from './../../services/usuario/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-view',
  templateUrl: './perfil-view.component.html',
  styleUrls: ['./perfil-view.component.css']
})
export class PerfilViewComponent implements OnInit {
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

  constructor(private userService: UsuarioService) { }

  ngOnInit(): void {
    this.userService.getClientByFireId().subscribe((respuesta) => {
      this.cliente = respuesta as Cliente;
      console.log(respuesta);
    })
  }

}
