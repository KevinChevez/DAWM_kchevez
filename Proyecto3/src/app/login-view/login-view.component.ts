import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent implements OnInit {
  fondos:any[] = [
    {"source": "../assets/images/bg_login_coffe.webp", "isActive":"active"},
    {"source": "../assets/images/bg_login_milkshake.webp", "isActive":""},
    {"source": "../assets/images/bg_login_toast.webp", "isActive":""}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
