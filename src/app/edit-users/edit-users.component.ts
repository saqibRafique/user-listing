import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit {
  user: any;
  userForm!: FormGroup;

  constructor(private userService: UsersService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.user = this.userService.filteredUser;
    this.userService.filteredUser = undefined;
    this.userForm = this.formBuilder.group({
      name: [this.user.name, ''],
      username: [this.user.username, ''],
      email: [this.user.email, ''],
      street: [this.user.address.street, ''],
      suite: [this.user.address.suite, ''],
      city: [this.user.address.city, ''],
      zipcode: [this.user.address.zipcode, ''],
      lat: [this.user.address.geo.lat, ''],
      lng: [this.user.address.geo.lng, ''],
      phone: [this.user.phone, ''],
      website: [this.user.website, ''],
      companyName: [this.user.company.name, ''],
      companyCatchPhrase: [this.user.company.catchPhrase, ''],
      companyBs: [this.user.company.bs, '']
    });
  }
}
