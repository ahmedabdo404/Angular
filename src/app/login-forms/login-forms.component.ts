import { Component, OnInit } from '@angular/core';
import { IFrom } from '../_model/ifrom';

@Component({
  selector: 'app-login-forms',
  templateUrl: './login-forms.component.html',
  styleUrls: ['./login-forms.component.css']
})
export class LoginFormsComponent implements OnInit {
  user: IFrom = { userName: "", password: "" }
  constructor() { }

  ngOnInit(): void {
  }
  Submit(){
    document.write(`<h1 class="text-success" style="color: green"> Username is "${this.user.userName}"</h1>
    <h2 class="text-info" style="color: red"> Password is "${this.user.password}"</h2>
    <button><a href="" class="btn btn-danger">Logout</a></button>`)
  }
}
