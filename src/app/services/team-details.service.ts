import {Injectable} from '@angular/core';
import {Optional} from "@angular/core";
import {SkipSelf} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class TeamDetailsService {

  teamName: String;

  constructor(@Optional() @SkipSelf() parent?: TeamDetailsService) {
    if (parent) {
      throw Error(`[GuardedSingletonService]: trying to create multiple instances of TeamDetailsService, but this service should be a singleton.`);
    }

    console.info("initilise LocationTrackerService")
  }
}
