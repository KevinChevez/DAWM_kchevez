import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  obtenerCategorias(){
    return this.http.get("http://localhost:3000/categorias");
  }

  obtenerCategoriasById(id: number){
    return this.http.get("http://localhost:3000/categorias" + id.toString());
  }
}
