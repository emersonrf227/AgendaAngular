import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from '../../services/Users.service';

@Component({
    templateUrl: './User.page.html',
    styleUrls: ['./User.page.css']
})

export class UserPage {

    public loading: boolean = false;
    public userId: string = '';
    public docId: string = '';

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private usersService: UsersService
    ) { }

    userForm = new FormGroup({
        nome: new FormControl('', Validators.required),
        cpf: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        ramal: new FormControl('', [Validators.required]),
        departamento: new FormControl('', [Validators.required]),
    })

    ngOnInit() {
        this.userId = this.route.snapshot.paramMap.get('id');

        if (this.userId) {
            this.getUser(this.userId);
        }
    }

    private getUser(id: string) {

        this.loading = true;

        this.usersService.getById(id)
            .subscribe((data: any) => {

                const { doc } = data[0].payload;

                const result = doc.data();

                this.docId = doc.id

                Object.keys(result)
                    .filter(item => item !== 'id')
                    .forEach((item) => {
                        this.userForm.controls[item].setValue(result[item]);
                        this.loading = false;
                    });
            });

    }

    onBack() {
        this.router.navigate(['users']);
    }

    onRemove() {

        this.loading = true;

        if (this.docId) {

            this.usersService.delete(this.docId)
                .then((data) => {
                    this.router.navigate(['users']);
                    this.loading = false;
                }).catch((err) => {
                    console.log(err);
                    this.loading = false;
                });

        }
    }

    onSubmit() {

        this.loading = true;

        if (this.userId) {

            this.usersService.update(this.docId, this.userForm.value)
                .then((data) => {
                    this.router.navigate(['users']);
                    this.loading = false;
                }).catch((err) => {
                    console.log(err);
                    this.loading = false;
                });

        } else {

            this.usersService.create(this.userForm.value)
                .then((data) => {
                    this.router.navigate(['users']);
                    this.loading = false;
                }).catch((err) => {
                    console.log(err);
                    this.loading = false;
                });
        }


    }
}