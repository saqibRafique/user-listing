import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  users: any;

  constructor(private userService: UsersService, private router: Router) {
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe( data => {
      this.users = data;
    })
  }

  editUser(id: number) {
    const user = this.users.find((data: any) => {
      return data.id === id;
    })
    this.userService.filteredUser = user;
    console.log(user);
    this.router.navigate(['/edit-users']);
  }

}
