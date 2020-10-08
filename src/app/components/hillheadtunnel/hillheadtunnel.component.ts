import { Component, OnInit } from '@angular/core';
import {locationNames} from "../../models/locationNames";
import {LocationTrackerService} from "../../services/location-tracker.service";

@Component({
  selector: 'app-hillheadtunnel',
  templateUrl: './hillheadtunnel.component.html',
  styleUrls: ['./hillheadtunnel.component.css']
})
export class HillheadtunnelComponent implements OnInit {
  config;

  constructor(private _locationTracker : LocationTrackerService) {
    this.config = _locationTracker.masterConfig;
  }

  ngOnInit(): void {
  }
}
