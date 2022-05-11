import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  constructor(
    // private http: HttpClient,
    // private router: Router
  ) { }

  loginForm = new FormGroup({
    loginName: new FormControl('', Validators.required),
    userPassword: new FormControl('', Validators.required),
    rememberMe: new FormControl('')
  });

  onUserSubmit() {
   console.log(this.loginForm.value);
  }

  ngOnInit(): void {

  }

}
