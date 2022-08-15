import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  inHome:string = "";
  inOrders:string = "";
  inPerfil:string = "";

  constructor( private rutaActiva: ActivatedRoute ) {
  }

  ngOnInit(): void {
    if(this.rutaActiva.snapshot.url.toString().localeCompare("inicio-view") === 0){
      this.inHome = "active";
    }
    else if(this.rutaActiva.snapshot.url.toString().localeCompare("ordenes-view") === 0){
      this.inOrders = "active";
    }
    else if(this.rutaActiva.snapshot.url.toString().localeCompare("perfil-view") === 0){
      this.inPerfil = "active";
    }
  }

}
