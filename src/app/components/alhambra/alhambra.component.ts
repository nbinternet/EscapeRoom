import {Component, OnInit} from '@angular/core';
import {LocationTrackerService} from "../../services/location-tracker.service";
import {locationNames} from "../../models/locationNames";

@Component({
  selector: 'app-alhambra',
  templateUrl: './alhambra.component.html',
  styleUrls: ['./alhambra.component.css']
})
export class AlhambraComponent implements OnInit {
  locationTracker: LocationTrackerService;
  config;

  constructor(private _locationTracker: LocationTrackerService) {
    this.locationTracker = _locationTracker
    this.config = _locationTracker.masterConfig;
  }

  ngOnInit(): void {
  }

  onSelect() {
    this.locationTracker.currentStatus.set(locationNames.SecretTunnel, true);
  }
}
