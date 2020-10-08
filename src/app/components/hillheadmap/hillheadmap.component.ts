import { Component, OnInit } from '@angular/core';
import {LocationTrackerService} from "../../services/location-tracker.service";

@Component({
  selector: 'app-hillheadmap',
  templateUrl: './hillheadmap.component.html',
  styleUrls: ['./hillheadmap.component.css']
})
export class HillheadmapComponent implements OnInit {
  locationTracker : LocationTrackerService;
  config;

  constructor(private _locationTracker : LocationTrackerService) {
    this.locationTracker = _locationTracker
    this.config = _locationTracker.masterConfig;
  }

  ngOnInit(): void {
  }

}
