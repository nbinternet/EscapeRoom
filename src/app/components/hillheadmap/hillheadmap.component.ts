import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hillheadmap',
  templateUrl: './hillheadmap.component.html',
  styleUrls: ['./hillheadmap.component.css']
})
export class HillheadmapComponent implements OnInit {
  config = {
    fade: true,
    alwaysOn: false,
    neverOn: false,

    // fill
    fill: true,
    fillColor: '#ffffff',
    fillOpacity: 0.4,

    // stroke
    stroke: true,
    strokeColor: '#4d0ec0',
    strokeOpacity: 1,
    strokeWidth: 1,

    // shadow:
    shadow: true,
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 10
  }

  constructor() { }

  ngOnInit(): void {
  }

}
