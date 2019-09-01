import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/Auth.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    templateUrl: './Account.page.html',
    styleUrls: ['./Account.page.css']
})
export class AccountPage { 

    public accountForm: FormGroup;
    public errorMessage: string = '';

    constructor(
        private authService: AuthService,
        private router: Router,
        private fb: FormBuilder
    ) {
        this.createForm();
    }

    createForm() {
        this.accountForm = this.fb.group({
			email: ['', Validators.required],
			password: ['', Validators.required],
            repeat: ['', Validators.required]
        });
	}
	
	tryCreateAccount(value) {
		if(value.password == value.repeat) {
			this.authService.doRegister(value)
            .then(res => {
                this.router.navigate(['/users']);
            }, err => {
                console.log(err);
                this.errorMessage = err;
            });
		} else {
			this.errorMessage = 'Senhas não conferem!';
		}
    }
}