import { Component, OnInit } from '@angular/core';
import { UsersService } from '../_services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userdef: string ="ahmed";
  userList:any[] = [];
  constructor(private users: UsersService) { }

  ngOnInit(): void {
    this.users.getAllUser().subscribe((x)=> 
    this.userList = x)
  }

}
