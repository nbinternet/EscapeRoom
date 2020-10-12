import {Component, OnInit} from '@angular/core';
import {LocationTrackerService} from "../../services/location-tracker.service";

@Component({
  selector: 'app-sciencecenter',
  templateUrl: './sciencecenter.component.html',
  styleUrls: ['./sciencecenter.component.css']
})
export class SciencecenterComponent implements OnInit {
  locationTracker: LocationTrackerService;
  config;

  constructor(private _locationTracker: LocationTrackerService) {
    this.locationTracker = _locationTracker
    this.config = _locationTracker.masterConfig;
  }

  ngOnInit(): void {
  }
}
