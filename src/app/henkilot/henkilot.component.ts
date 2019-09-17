import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-henkilot',
  templateUrl: './henkilot.component.html',
  styleUrls: ['./henkilot.component.css']
})
export class HenkilotComponent implements OnInit {
  henkilot = [
    {
      nimi: 'Rane',
      ika: 23
    },
    {
      nimi: 'Tare',
      ika: 42
    },
    {
      nimi: 'Pena',
      ika: 62
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
