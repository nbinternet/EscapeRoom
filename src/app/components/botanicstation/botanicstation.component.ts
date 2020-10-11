import {Component, OnInit} from '@angular/core';
import {LocationTrackerService} from "../../services/location-tracker.service";

@Component({
  selector: 'app-botanicstation',
  templateUrl: './botanicstation.component.html',
  styleUrls: ['./botanicstation.component.css']
})
export class BotanicstationComponent implements OnInit {
  config;

  constructor(private _locationTracker: LocationTrackerService) {
    this.config = _locationTracker.masterConfig;
  }

  ngOnInit(): void {
  }

}
