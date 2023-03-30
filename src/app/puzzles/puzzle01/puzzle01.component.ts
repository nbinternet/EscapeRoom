import { Component } from '@angular/core';
import { locationNames } from 'src/app/models/locationNames';
import { LocationTrackerService } from 'src/app/services/location-tracker.service';

@Component({
    selector: 'app-puzzle01',
    templateUrl: './puzzle01.component.html',
    styleUrls: ['./puzzle01.component.css']
})
export class Puzzle01Component {
    
    constructor (
        private _locationTracker: LocationTrackerService
    ){ }

    get showPt1(): boolean {
        return (
            !this._locationTracker.currentStatus.get(locationNames.Puzzle01Part1) &&
            !this._locationTracker.currentStatus.get(locationNames.Puzzle01Part2)
        );
    }

    get showPt2(): boolean {
        return (
            this._locationTracker.currentStatus.get(locationNames.Puzzle01Part1) &&
            !this._locationTracker.currentStatus.get(locationNames.Puzzle01Part2)
        );
    }
    
    get complete(): boolean {
        return (
            this._locationTracker.currentStatus.get(locationNames.Puzzle01Part1) &&
            this._locationTracker.currentStatus.get(locationNames.Puzzle01Part2)
        );
    }

    returnToMapClicked() {
        this._locationTracker.currentStatus.set(locationNames.Puzzle01, true)
    }
}