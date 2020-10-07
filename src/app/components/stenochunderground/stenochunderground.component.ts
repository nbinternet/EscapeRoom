import { Component, OnInit } from '@angular/core';
import {LocationTrackerService} from "../../services/location-tracker.service";
import {locationNames} from "../../models/locationNames";

@Component({
  selector: 'app-stenochunderground',
  templateUrl: './stenochunderground.component.html',
  styleUrls: ['./stenochunderground.component.css']
})
export class StenochundergroundComponent implements OnInit {
  locationTracker : LocationTrackerService;

  constructor(private _locationTracker : LocationTrackerService) {
    this.locationTracker = _locationTracker
  }

  ngOnInit(): void {
  }

  onSelect() {
    this.locationTracker.currentStatus.set(locationNames.HillheadTunnel, true);
  }
}
