import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personcard',
  templateUrl: './personcard.component.html',
  styleUrls: ['./personcard.component.css']
})
export class PersoncardComponent implements OnInit {

  heading: string;

  constructor() { }

  ngOnInit() {
    this.heading = 'Person';
  }

}
