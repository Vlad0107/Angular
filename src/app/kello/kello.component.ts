import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kello',
  templateUrl: './kello.component.html',
  styleUrls: ['./kello.component.css']
})
export class KelloComponent implements OnInit {

  time = new Date();
  timer;

  constructor() { }

  ngOnInit() {
    this.timer = setInterval(() => {
      this.time = new Date();
    }, 1000);
  }

}
