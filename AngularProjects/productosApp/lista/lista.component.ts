import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nombre'];
  dataSource = [];

  constructor() { }

  ngOnInit(): void {
    
  }

}
