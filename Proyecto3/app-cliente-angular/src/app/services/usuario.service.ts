import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private auth: Auth) { }

  register({email, password}: any){
    return createUserWithEmailAndPassword(this.auth, email, password);
  }
}
