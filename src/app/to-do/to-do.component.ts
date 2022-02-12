import { Element } from '@angular/compiler';
import { Component, ContentChild, OnInit, ElementRef, ViewChild , ViewChildren, HostListener} from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
  text:string = "ahmed";
  itemsArr:string[] = [];
  users:string [] = [];
  usr2:string [] = [];
  // @ContentChild("ele") Element?:ElementRef;
  // @ViewChild("ele") Element?:ElementRef;
  // @ViewChild("username") Element?:ElementRef;
  @ViewChild("username") username?:ElementRef;
  @ViewChildren("items ") items?:ElementRef;


  constructor() {
  }
  
  ngOnInit(): void {
    this.usr2 = this.users;
  }
  adduser(u:string){
    this.users.push(u);
  }

  remove(i:any){
    this.users.splice(i, 1);
  }

  search(index:string){
    this.usr2 = this.users.filter(i => (i.includes(index)));
  }
  
  // Add(username:string){
  //   console.log(username)
  // }

  Addtext(t:any){
    if(t != "" && t.inputType !== "deleteContentBackward" )
      this.itemsArr.push(t.target.value);
  }

  delText(t:any){
      this.itemsArr.pop();
  }

  AddItem(i:any){
    if(i != ""){
      let tab:any = [], index;
      let listNode = document.getElementById("list"),
        textNode = document.createTextNode(i),
        liNode = document.createElement("LI");

        liNode.appendChild(textNode);
        listNode?.appendChild(liNode);

        this.resetArr();

        liNode.onclick = function(){
        index = tab.indexOf(liNode.innerHTML);
        i = liNode.innerHTML;
      };
    }
  }

  resetArr(){
    // clear array
    let tab:any = [], items = document.querySelectorAll("#list li");
    tab.length = 0;
    items = document.querySelectorAll("#list li");
  
    for(let i = 0; i < items.length; i++){
    tab.push(items[i].innerHTML);
    }
  }
  
//   del(x){
//     let items = document.querySelectorAll("#list li")
//     this.resetArr();
//     for(let i = 0; i < items.length; i++){
//       items[i].innerHTML = "";
//       }
// }

  ngAfterViewInit(): void {
    // console.log((this.Element?.nativeElement as HTMLDivElement).style.paddingLeft = "20px")
  }

}
