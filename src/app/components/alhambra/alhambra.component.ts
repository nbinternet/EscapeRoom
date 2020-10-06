import { Component, OnInit } from '@angular/core';
import {LocationTrackerService} from "../../services/location-tracker.service";

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
    console.info("onSelect " + this.locationTracker.currentStatus.get('SecretTunnel'));
    this.locationTracker.currentStatus.set('SecretTunnel', true);
    console.info("onSelect:after " + this.locationTracker.currentStatus.get('SecretTunnel'));
  }
}
