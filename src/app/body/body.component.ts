import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class bodyComponent implements OnInit {
  ListOfNames: any[] = ["ahmed", "mohamed", "ali", 1, true]
  peopleByCountry: any[] = [ { 'country': 'UK', 'people': [ { "name": "Douglas Pace" }, { "name": "Mcleod Mueller" }, ] },
  { 'country': 'US', 'people': [ { "name": "Day Meyers" }, { "name": "Aguirre Ellis" }, { "name": "Cook Tyson" } ] },
  { 'country': 'MARS', 'people': [ { "name": "Douglas Pace" }, { "name": "Mcleod Mueller" }, ] } ];

  constructor() { }

  ngOnInit(): void {
  }

}
