import { Router } from '@angular/router';
import { LoginService } from './../../services/login/login.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import firebase from 'firebase/compat/app'
import { initializeApp } from "firebase/app";
@Component({
  selector: 'app-login-texto',
  templateUrl: './login-texto.component.html',
  styleUrls: ['./login-texto.component.css']
})
export class LoginTextoComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
  }, [])
  hide = true;
  isRegistered = true;
  nombre_negocio:string = "MARU";
  sub_nombre_mainProd:string = "Batidos y tostadas";
  slogan:string = "¿Y si nos pegamos un batido con tostadas?";


  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    let email = this.loginForm.value.email;
    let password = this.loginForm.value.password;
    if(email && password){
      this.loginService.login(email, password)
        .then((respuesta) => {
          console.log(respuesta);
          this.router.navigate(['/inicio']);
        })
        .catch(error => {
          console.log(error);
          this.isRegistered = false;
        })
      ;
    }
  }

  getErrorMessage( formGroup: FormGroup, item: string): string {
    let itemControl: FormControl = formGroup.get(item) as FormControl;
    switch (item) {
      case 'email':
        if (itemControl.hasError('required')) {
          return 'Debe llenar este campo';
        }
        return itemControl.hasError('email') ? 'Email no válido' : '';

      case 'password':
        if (itemControl.hasError('required')) {
          return 'Debe llenar este campo';
        }
        return itemControl.hasError('minlength') ? 'Debe ingresar una contraseña mayor a 4 dígitos' : '';

      default:
        return '';
    }
  }
}
