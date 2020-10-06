import {Injectable} from '@angular/core';
import {SkipSelf} from "@angular/core";
import {Optional} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class LocationTrackerService {

  public currentStatus = new Map();

  constructor(@Optional() @SkipSelf() parent?: LocationTrackerService) {
    if (parent) {
      throw Error(`[GuardedSingletonService]: trying to create multiple instances, but this service should be a singleton.`);
    }

    console.info("initilise")
    this.currentStatus.set('SecretTunnel', false);
    // this.currentStatus.set(locationNames.GlasgowCentralLowLevel, false );
    // this.currentStatus.set(locationNames.StEnochTunnel, false );
    // this.currentStatus.set(locationNames.StEnochUnderground, false );
    // this.currentStatus.set(locationNames.HillheadTunnel, false );
    // this.currentStatus.set(locationNames.spare1, false );
    // this.currentStatus.set(locationNames.spare2, false );
  }
}
