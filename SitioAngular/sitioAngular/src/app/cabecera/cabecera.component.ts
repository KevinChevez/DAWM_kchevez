import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  strAcerca:string = "Album fotográfico"
  strInfo:string = "A través de mis ojos"
  
  constructor() { }

  ngOnInit(): void {
  }

}
