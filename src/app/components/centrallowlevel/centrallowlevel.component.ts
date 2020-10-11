import {Component, OnInit} from '@angular/core';
import {LocationTrackerService} from "../../services/location-tracker.service";
import {locationNames} from "../../models/locationNames";
import {TeamDetailsService} from "../../services/team-details.service";

@Component({
  selector: 'app-centrallowlevel',
  templateUrl: './centrallowlevel.component.html',
  styleUrls: ['./centrallowlevel.component.css']
})
export class CentrallowlevelComponent implements OnInit {
  locationTracker: LocationTrackerService;
  config;
  teamDetailsService: TeamDetailsService;

  constructor(private _locationTracker: LocationTrackerService, private _teamDetailsService: TeamDetailsService) {
    this.teamDetailsService = _teamDetailsService;
    this.locationTracker = _locationTracker
    this.config = _locationTracker.masterConfig;
  }

  ngOnInit(): void {
  }

  onSelect() {
    this.locationTracker.currentStatus.set(locationNames.StEnochTunnel, true);
  }
}
