import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../../services/auth.service';
import { tap } from 'rxjs';

@Component({
	selector: 'app-registration',
	templateUrl: './registration.component.html',
	styleUrls: [ './registration.component.css' ]
})
export class RegistrationComponent implements OnInit {

	isLogging = false;
	myForm: FormGroup = new FormGroup({
		'userPassword': new FormControl('', [
			Validators.required,
			Validators.minLength(4)
		]),
		'userName': new FormControl('', Validators.required),
		'userEmail': new FormControl('', [ Validators.required,Validators.email, Validators.minLength(4) ])
	});

	constructor(private authService: AuthService, private router: Router, private _snackBar: MatSnackBar) {
	}

	ngOnInit(): void {
	}

	addNewUser() {
		this.isLogging = true;
		this.authService.onRegistration(this.myForm.controls['userName'].value, this.myForm.controls['userPassword'].value, this.myForm.controls['userEmail'].value)
			.pipe(tap(() => {
				this.isLogging = false;
				this._snackBar.open('Ви успішно зареєстровані!', 'Ок', {
					duration: 2000
				});
			}))
			.subscribe(() => {
			this.router.navigate([ '/' ]);
		}, (error => {
			if (error.status == 400) {
				this._snackBar.open('Такий користувач вже існує!', 'Ок', {
					duration: 2000
				});
			}
			this.isLogging = false;
		}));
	}
}
