import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { tap } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLogging = false;
  myForm: FormGroup = new FormGroup({
    "userPassword": new FormControl("", [
      Validators.required,
      Validators.minLength(4)
    ]),
    "userEmail": new FormControl("", [Validators.required,Validators.email]),
  });

  constructor(private authService: AuthService, private router: Router,private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.authService.logout();
  }

  login() {
    this.isLogging = true;
    this.authService.onAuthorize(this.myForm.controls['userEmail'].value, this.myForm.controls['userPassword'].value)
        .pipe(tap(() => this.isLogging = false)).subscribe((res: any) => {
      localStorage.setItem('access_token', res.access_token);
      this.router.navigate(['/'])
    },(error => {
      if(error.status==404){
        this._snackBar.open('Такого користувача не існує!', 'Ок', {
          duration:2000
        });
      }
      this.isLogging=false;
    }))
  }
  toRegistration(){
    this.router.navigate(['/authorization/registration'])
  }
}
