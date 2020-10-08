import {Component, OnInit} from '@angular/core';
import {LocationTrackerService} from "../../services/location-tracker.service";

@Component({
  selector: 'app-centralglasgow',
  templateUrl: './centralglasgow.component.html',
  styleUrls: ['./centralglasgow.component.css']
})
export class CentralglasgowComponent implements OnInit {
  locationTracker: LocationTrackerService;
  config;

  constructor(private _locationTracker: LocationTrackerService) {
    this.locationTracker = _locationTracker
    this.config = _locationTracker.masterConfig;
  }

  ngOnInit(): void {
  }
}
