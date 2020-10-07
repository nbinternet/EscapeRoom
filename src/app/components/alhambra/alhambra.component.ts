import { Component, OnInit } from '@angular/core';
import {LocationTrackerService} from "../../services/location-tracker.service";
import {locationNames} from "../../models/locationNames";

@Component({
  selector: 'app-alhambra',
  templateUrl: './alhambra.component.html',
  styleUrls: ['./alhambra.component.css']
})
export class AlhambraComponent implements OnInit {

  locationTracker : LocationTrackerService;

  constructor(private _locationTracker : LocationTrackerService) {
    this.locationTracker = _locationTracker
  }

  ngOnInit(): void {
  }

  onSelect() {
    console.info("onSelect SecretTunnel " + this.locationTracker.currentStatus.get(locationNames.SecretTunnel));
    this.locationTracker.currentStatus.set(locationNames.SecretTunnel, true);
    console.info("onSelect:after SecretTunnel " + this.locationTracker.currentStatus.get(locationNames.SecretTunnel));
  }
}
