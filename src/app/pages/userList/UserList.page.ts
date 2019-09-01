import { Component } from '@angular/core';
import { UsersService } from '../../services/Users.service';

@Component({
    templateUrl: './UserList.page.html',
    styleUrls: ['./UserList.page.css']
})

export class UserListPage {

    public items = [];

    public filterBy: string = '';

    public orderBy: string = '';

    constructor(
        private usersService: UsersService
    ) { }

    ngOnInit() {
        this.list();
    }

    private list() {
        this.items = [];
        this.usersService.getList()
            .subscribe((data: any) => {
                Object.keys(data)
                    .forEach((index) => {
                        this.items.push(data[index].payload.doc.data());
                    });
            });
    }

    setFilterBy(event: any) {
        this.filterBy = event.target.value
    }

    setOrderBy(value: string) {
        this.orderBy = value
    }
}