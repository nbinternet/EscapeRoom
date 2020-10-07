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

  constructor(private _locationTracker : LocationTrackerService) {
    this.locationTracker = _locationTracker
  }

  ngOnInit(): void {
  }

  onSelect() {
    this.locationTracker.currentStatus.set(locationNames.StEnochUnderground, true);
  }
}
