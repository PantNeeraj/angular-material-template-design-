import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  key: string;
  Email: string;
  Activity  : string;
  Push: string;
  SMS: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {key: "Mentions", Activity :" Notify when another user mentions you in a comment", Email: '', Push: '', SMS: ''},
  {key: "Comments", Activity : "Notify when another user comments your item.", Email: '', Push: '', SMS: ''},
  {key: "Follows", Activity : "Notify when another user follows you.", Email: '', Push: '', SMS: ''}
 
];

@Component({
  selector: 'app-reactive-form5',
  templateUrl: './reactive-form5.component.html',
  styleUrls: ['./reactive-form5.component.css']
})
export class ReactiveForm5Component implements OnInit {
  displayedColumns: string[] = ['Activity', 'Email', 'Push', 'SMS'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
    console.log(ELEMENT_DATA)
  }

}
