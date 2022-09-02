import { UsuarioService } from './../../services/usuario/usuario.service';
import { RegisterService } from './../../services/register/register.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    passwordConfirm: new FormControl('', [Validators.required, Validators.minLength(5)]),
  }, [])
  hide = true;
  isRegistered = false;
  fondos:any[] = [
    {"source": "../assets/images/bg_login_coffe.webp", "isActive":"active"},
    {"source": "../assets/images/bg_login_milkshake.webp", "isActive":""},
    {"source": "../assets/images/bg_login_toast.webp", "isActive":""}
  ];


  constructor(private userService: UsuarioService, private router: Router) {
    let passwordConfControl = this.registerForm.get('passwordConfirm') as FormControl;
    passwordConfControl.addValidators(this.createCompareValidator(this.registerForm.get('password') as AbstractControl, this.registerForm.get('passwordConfirm') as AbstractControl));
  }

  ngOnInit(): void {
  }

  onSubmit(){
    let email = this.registerForm.value.email;
    let password = this.registerForm.value.password;
    if(email && password){
      this.userService.register(email, password)
      .then(response => {
        console.log(response);
        console.log(response.user.uid);
        this.userService.setUserFireId();
        this.router.navigate(['/inicio']);
      })
      .catch(error => {
        console.log(error);
        this.isRegistered = true;
      });
    }
  }

  createCompareValidator(controlOne: AbstractControl, controlTwo: AbstractControl) {
    return () => {
    if (controlOne.value !== controlTwo.value)
      return { match_error: 'Value does not match' };
    return null;
  };

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

      case 'passwordConfirm':
        if (itemControl.hasError('required')) {
          return 'Debe llenar este campo';
        }
        if(itemControl.hasError('match_error')){
          return 'La contraseña no coindice';
        }
        return '';

      default:
        return '';
    }
  }
}
