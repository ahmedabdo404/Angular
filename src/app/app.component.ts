import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  name:string = "";
  names:string[] = [];
  inData:string=""

  ngOnInit():void{
    this.name = "ali"
    this.names = ["ahmed", "ali", "Mohamed", "Asmaa"]
  }
  show(name:string){
    this.inData = name;
  }
}