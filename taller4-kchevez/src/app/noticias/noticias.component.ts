import { Component, OnInit } from '@angular/core';
import { Noticia } from '../interface/noticia';
import { FuenteService } from './../services/fuente.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
  noticias = {"noticias": []}
  arrNoticias = [] as Noticia[]
  constructor(private fuenteService: FuenteService) {}

  ngOnInit(): void {
    this.fuenteService.getNoticias().subscribe(respuesta => {
      this.noticias = respuesta as any;
      this.arrNoticias = this.noticias.noticias;
    })
  }

}
