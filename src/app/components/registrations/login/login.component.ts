import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service.service';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environements/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup;
  constructor(private service:AuthService,private router:Router,private formBuilder: FormBuilder ){

  }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
      const username = this.loginForm.get('username')?.value;
      const pass = this.loginForm.get('password')?.value;
      console.log(username, pass)
      this.service.login_Falleh(username,pass).subscribe(
        (response) => {
          console.log(response);
                },
        (error) => {
          // Handle error
        }
      );
    }
  }



