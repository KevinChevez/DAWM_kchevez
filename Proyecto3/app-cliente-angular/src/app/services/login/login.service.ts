import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';

import firebase from 'firebase/compat';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  token: string = '';

  constructor(private router: Router, private http: HttpClient, private auth:Auth) { }

  login(email:string, pass:string){
    return signInWithEmailAndPassword(this.auth, email, pass);
    // firebase.auth().signInWithEmailAndPassword(email, pass)
    //   .then((respuesta) => {
    //     firebase.auth().currentUser?.getIdToken()
    //       .then((token_res)=>{
    //         this.token = token_res;
    //         this.router.navigate(['/inicio']);
    //       })
    //       .catch(err => {console.log(err)});
    //   })
    //   .catch(err => {console.log(err)});
  }

  getIdToken(){
    return this.token;
  }
}
