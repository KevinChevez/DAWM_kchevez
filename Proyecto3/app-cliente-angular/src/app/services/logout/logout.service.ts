import { Injectable } from '@angular/core';
import { Auth, signOut } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private auth: Auth) { }

  logout(){
    return signOut(this.auth);
  }
}
