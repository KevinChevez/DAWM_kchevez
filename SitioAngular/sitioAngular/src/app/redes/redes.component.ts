import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.css']
})
export class RedesComponent implements OnInit {

  redes:any[] = [
    {
      'href': 'https://twitter.com/home',
      'alt': 'Sígueme en Twitter',
      'src': 'https://cdn-icons-png.flaticon.com/512/733/733635.png'
    },
    {
      'href': 'https://www.facebook.com/',
      'alt': 'Likes en Facebook',
      'src': 'https://cdn-icons-png.flaticon.com/512/733/733603.png'
    },
    {
      'href': 'mailto:correo@gmail.com',
      'alt': 'Envíame un correo',
      'src': 'https://cdn-icons-png.flaticon.com/512/739/739193.png'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
