import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FuenteService {

  constructor(private http: HttpClient) { }

  getNoticias(){
    return this.http.get("https://damp-beach-17296.herokuapp.com/https://dataserverdawm.herokuapp.com/noticias");
  }
}
