import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-view',
  templateUrl: './perfil-view.component.html',
  styleUrls: ['./perfil-view.component.css']
})
export class PerfilViewComponent implements OnInit {

  bd:any = {
    nombre: "Kevin",
    apellido: "Chévez",
    num_compras: 78,
    rate_to_app: 4.8,
    num_comments: 43,
    num_liked: 1256
  }

  constructor() { }

  ngOnInit(): void {
  }

}
