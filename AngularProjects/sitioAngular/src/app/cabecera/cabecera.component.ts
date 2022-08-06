import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  strAcerca:string = "Uso de Angular Material Design"
  strInfo:string = "By Kevin Isaac Chévez Coronel - DAWM - Paralelo #1"

  constructor() { }

  ngOnInit(): void {
  }

}
