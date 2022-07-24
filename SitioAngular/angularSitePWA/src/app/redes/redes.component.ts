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
      'src': 'https://cdn-icons-png.flaticon.com/512/733/733579.png'
    },
    {
      'href': 'https://www.facebook.com/',
      'alt': 'Likes en Facebook',
      'src': 'https://cdn-icons-png.flaticon.com/512/174/174848.png'
    },
    {
      'href': 'mailto:correo@gmail.com',
      'alt': 'Envíame un correo',
      'src': 'https://cdn-icons-png.flaticon.com/512/2111/2111463.png'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
