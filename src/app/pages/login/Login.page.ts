import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/Auth.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    templateUrl: './Login.page.html',
    styleUrls: ['./Login.page.css']
})
export class LoginPage {

    public loginForm: FormGroup;
    public errorMessage: string = '';

    constructor(
        private authService: AuthService,
        private router: Router,
        private fb: FormBuilder
    ) {
        this.createForm();
    }

    createForm() {
        this.loginForm = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    verificaLogin(value) {
        this.authService.doLogin(value)
            .then(res => {
                this.router.navigate(['/users']);
            }, err => {
                console.log(err);
                this.errorMessage = err;
            })
    }
}