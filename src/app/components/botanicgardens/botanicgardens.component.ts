import {Component, OnInit} from '@angular/core';
import {LocationTrackerService} from "../../services/location-tracker.service";

@Component({
  selector: 'app-botanicgardens',
  templateUrl: './botanicgardens.component.html',
  styleUrls: ['./botanicgardens.component.css']
})
export class BotanicgardensComponent implements OnInit {
  config;

  constructor(private _locationTracker: LocationTrackerService) {
    this.config = _locationTracker.masterConfig;
  }

  ngOnInit(): void {
  }

}
