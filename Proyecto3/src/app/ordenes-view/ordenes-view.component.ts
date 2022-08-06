import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordenes-view',
  templateUrl: './ordenes-view.component.html',
  styleUrls: ['./ordenes-view.component.css']
})
export class OrdenesViewComponent implements OnInit {

  products:any[] = [
    {fila: [
      {"name": "Frutilla" , "isActive":"active", "selected":"true"},
      {"name": "Mora" , "isActive":"", "selected":"false"},
    ]},
    {fila: [
      {"name": "Oreo" , "isActive":"", "selected":"false"},
      {"name": "Papaya" , "isActive":"", "selected":"false"},
    ]},
    {fila: [
      {"name": "Banano" , "isActive":"", "selected":"false"},
    ]},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
