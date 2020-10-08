import { Component, OnInit } from '@angular/core';
import {locationNames} from "../../models/locationNames";
import {LocationTrackerService} from "../../services/location-tracker.service";

@Component({
  selector: 'app-stenochroute',
  templateUrl: './stenochroute.component.html',
  styleUrls: ['./stenochroute.component.css']
})
export class StenochrouteComponent implements OnInit {
  locationTracker : LocationTrackerService;
  config;

  constructor(private _locationTracker : LocationTrackerService) {
    this.locationTracker = _locationTracker
    this.config = _locationTracker.masterConfig;
  }

  ngOnInit(): void {
  }

  onSelect() {
    this.locationTracker.currentStatus.set(locationNames.StEnochUnderground, true);
  }
}
