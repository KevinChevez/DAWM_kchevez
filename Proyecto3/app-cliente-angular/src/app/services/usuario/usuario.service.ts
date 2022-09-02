import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, idToken , getIdToken , authState, User } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private userFireid = '';
  private authIDToken = '';

  constructor(private auth: Auth, private http: HttpClient) {
    authState(auth).subscribe( usuario => {
      console.log(usuario);
      this.setAuthIDToken();
    });
    this.setAuthIDToken();
  }

  // Relational Database - Request Express funtions
  getClients(){
    return this.http.get('http://localhost:3000/clientes');
  }

  getClientById(id: number){
    return this.http.get('http://localhost:3000/clientes/' + id.toString);
  }
  getClientByFireId(){
    this.setUserFireId()
    console.log(this.userFireid);
    return this.http.post('http://localhost:3000/clientes/', {fireid: this.userFireid});
  }

  // Non Relational Database - Firebase functions
  getUserFireId(){
    return this.auth.currentUser?.uid;
  }

  setUserFireId(){
    if (this.getUserFireId()) {
      this.userFireid = this.getUserFireId() as any;
    }
  }

  setAuthIDToken(){
    idToken(this.auth).subscribe((fireidtoken) => {
      if(fireidtoken){
        this.authIDToken = fireidtoken;
      }
    })
  }

  register(email:string, password:string){
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  login(email:string, pass:string){
    return signInWithEmailAndPassword(this.auth, email, pass);
  }

  logout(){
    return signOut(this.auth);
  }

  getDataFirebase(){
    console.log(this.authIDToken);
    return this.http.get(`https://dbnr-kch-proy3-dawm-default-rtdb.firebaseio.com/collection_clientes_proy3.json?auth=${this.authIDToken}`);
  }
}
