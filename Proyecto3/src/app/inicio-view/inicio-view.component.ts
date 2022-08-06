import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio-view',
  templateUrl: './inicio-view.component.html',
  styleUrls: ['./inicio-view.component.css']
})
export class InicioViewComponent implements OnInit {

  productos:any[] = [
    {
      "titulo": "Batidos",
      "subtitulo": "Algunos batidos",
      "items": [
        {
          "src": "../../assets/images/img_milkshake.webp",
          "titulo": "Batido de fresa",
          puntaje: 4.5,
          precio: 0.75,
          "horario": "07H00 a 17H00",
        },
        {
          "src": "../../assets/images/img_milkshake_bb.webp",
          "titulo": "Batido de mora",
          puntaje: 4.7,
          precio: 0.75,
          "horario": "07H00 a 17H00",
        }
      ]
    },
    {
      "titulo": "Tostadas",
      "subtitulo": "Algunas tostadas",
      "items": [
        {
          "src": "../../assets/images/bg_login_toast.webp",
          "titulo": "Tostada de queso",
          puntaje: 4.8,
          precio: 1.25,
          "horario": "07H00 a 17H00",
        },
        {
          "src": "../../assets/images/img_toast_ham.webp",
          "titulo": "Tostada de jamón",
          puntaje: 4.9,
          precio: 1.50,
          "horario": "07H00 a 17H00",
        }
      ]
    },
    {
      "titulo": "Cafés",
      "subtitulo": "Algunos desayunos",
      "items": [
        {
          "src": "../../assets/images/img_milkshake.webp",
          "titulo": "Café expreso",
          puntaje: 4.7,
          precio: 0.50,
          "horario": "07H00 a 12H00",
        },
        {
          "src": "../../assets/images/img_milkshake_bb.webp",
          "titulo": "Batido de mora",
          puntaje: 4.7,
          precio: 0.75,
          "horario": "07H00 a 17H00",
        }
      ]
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
