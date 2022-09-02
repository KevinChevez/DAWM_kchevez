import { LogoutService } from './../../services/logout/logout.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  inHome:string = "";
  inOrders:string = "";
  inPerfil:string = "";
  inInfo: string = "";

  constructor( private rutaActiva: ActivatedRoute, private logoutService: LogoutService, private router: Router ) {
  }

  onClick(){
    this.logoutService.logout()
      .then( () => {
        this.router.navigate(['/login']);
      })
      .catch(error => {console.log(error)})
    ;
  }

  ngOnInit(): void {
    if(this.rutaActiva.snapshot.url.toString().localeCompare("inicio") === 0){
      this.inHome = "active";
    }
    else if(this.rutaActiva.snapshot.url.toString().includes("ordenes")){
      this.inOrders = "active";
    }
    else if(this.rutaActiva.snapshot.url.toString().localeCompare("perfil") === 0){
      this.inPerfil = "active";
    }
    else if(this.rutaActiva.snapshot.url.toString().localeCompare("info") === 0){
      this.inInfo = "active";
    }
  }

}
