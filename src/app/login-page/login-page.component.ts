import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  

  userNameControl = new FormControl(null, [Validators.required, Validators.email]);
  passwordControl = new FormControl(null, [Validators.required]);
  isMatched = 'NULL';
  constructor(private service: LoginServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    const isMatched = this.service.login(this.userNameControl.value, this.passwordControl.value);
    if (isMatched) {
      this.isMatched = 'MATCHED';
      this.router.navigate(['home']);
    }
    else {
      this.isMatched = 'NOT_MATCHED';
     
    
    }
   
  }

  close(){
    this.isMatched='CLOSE'
    this.userNameControl.setValue(null);
    this.passwordControl.setValue(null);
  }
      
}
