import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  token: string = '';

  constructor(private router: Router, private http: HttpClient, private auth:Auth) { }

  login(email:string, pass:string){
    return signInWithEmailAndPassword(this.auth, email, pass);
  }

  getIdToken(){
    return this.token;
  }
}
