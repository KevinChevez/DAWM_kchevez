import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-texto',
  templateUrl: './login-texto.component.html',
  styleUrls: ['./login-texto.component.css']
})
export class LoginTextoComponent implements OnInit {
  nombre_negocio:string = "MARU";
  sub_nombre_mainProd:string = "Batidos y tostadas";
  slogan:string = "¿Y si nos pegamos un batido con tostadas?";
  constructor() { }

  ngOnInit(): void {
  }

}
