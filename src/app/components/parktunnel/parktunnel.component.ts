import {Component, OnInit} from '@angular/core';
import {LocationTrackerService} from "../../services/location-tracker.service";
import {TeamDetailsService} from "../../services/team-details.service";

@Component({
  selector: 'app-parktunnel',
  templateUrl: './parktunnel.component.html',
  styleUrls: ['./parktunnel.component.css']
})
export class ParktunnelComponent implements OnInit {
  config;
  teamDetailsService: TeamDetailsService;

  constructor(private _locationTracker: LocationTrackerService, private _teamDetailsService: TeamDetailsService) {
    this.config = _locationTracker.masterConfig;
    this.teamDetailsService = _teamDetailsService;
  }

  ngOnInit(): void {
  }

}
