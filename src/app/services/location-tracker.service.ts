import {Injectable} from '@angular/core';
import {SkipSelf} from "@angular/core";
import {Optional} from "@angular/core";
import {locationNames} from "../models/locationNames";

@Injectable({
  providedIn: 'root'
})
export class LocationTrackerService {

  public currentStatus = new Map();

  public masterConfig = {
    fade: true,
    alwaysOn: false,
    neverOn: false,

    // fill
    fill: true,
    fillColor: '#ffffff',
    fillOpacity: 0.7,

    // stroke
    stroke: true,
    strokeColor: '#4d0ec0',
    strokeOpacity: 1,
    strokeWidth: 2,

    // shadow:
    shadow: true,
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 13
  };


  constructor(@Optional() @SkipSelf() parent?: LocationTrackerService) {
    if (parent) {
      throw Error(`[GuardedSingletonService]: trying to create multiple instances, but this service should be a singleton.`);
    }

    console.info("initilise")
    this.currentStatus.set(locationNames.SecretTunnel, false);
    this.currentStatus.set(locationNames.GlasgowCentralLowLevel, false);
    this.currentStatus.set(locationNames.StEnochTunnel, false);
    this.currentStatus.set(locationNames.StEnochUnderground, false);
    this.currentStatus.set(locationNames.HillheadTunnel, false);
    this.currentStatus.set(locationNames.BotanicGardens, false);
    this.currentStatus.set(locationNames.BotanicStation, false);
    this.currentStatus.set(locationNames.ParkTunnel, false);
  }
}
