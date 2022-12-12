import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	constructor(
		private http: HttpClient,
		private router: Router,
	) {
	}

	onAuthorize(email: string, password: string) {
		return this.http.post(
			`${environment.baseEndpoint}auth/login`,
			{
				email, password
			}
		);
	}

	onRegistration(name: string, password: string, email: string) {
		return this.http.post(
			`${environment.baseEndpoint}auth/registration`,
			{
				name,
				password,
				email,
			}
		);
	}

	logout() {
		localStorage.clear();
		this.router.navigate([ 'authorization/login' ]).then();
	}

	isAuthorize() {
		// return sessionStorage.getItem("access_token") !== null;
		const token = localStorage.getItem('access_token');
    console.log(token);
		return token !== null;
	}
}
