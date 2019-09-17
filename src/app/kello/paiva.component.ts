import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paiva',
  templateUrl: './paiva.component.html',
  styleUrls: ['./paiva.component.css']
})
export class PaivaComponent implements OnInit {

  today: number = Date.now();
  constructor() { }

  ngOnInit() {
  }

}
