import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list-page',
  templateUrl: './user-list-page.component.html',
  styleUrls: ['./user-list-page.component.css']
})
export class UserListPageComponent implements OnInit {
  users: any[] = []

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe((users) => {
      this.users = users as any[]
    })
  }

}
