import { Component } from "@angular/core";
import { LocationTrackerService } from "src/app/services/location-tracker.service";
import { locationNames } from "src/app/models/locationNames";

@Component({
    selector: 'app-puzzle05',
    templateUrl: './puzzle05.component.html',
    styleUrls: ['./puzzle05.component.css']
})
export class Puzzle05Component {
    public password: string;
    public keyspace: number;  
    
    constructor(
        private _locationTracker: LocationTrackerService
    ) {}

    get showPt1(): boolean {
        return (
            !this._locationTracker.currentStatus.get(locationNames.Puzzle05Part1) &&
            !this._locationTracker.currentStatus.get(locationNames.Puzzle05Part2) &&
            !this._locationTracker.currentStatus.get(locationNames.Puzzle05Part3)
        );
    }
    
    get showPt2(): boolean {
        return (
            this._locationTracker.currentStatus.get(locationNames.Puzzle05Part1) &&
            !this._locationTracker.currentStatus.get(locationNames.Puzzle05Part2) &&
            !this._locationTracker.currentStatus.get(locationNames.Puzzle05Part3)
        );
    }
    
    get showPt3(): boolean {
        return (
            this._locationTracker.currentStatus.get(locationNames.Puzzle05Part1) &&
            this._locationTracker.currentStatus.get(locationNames.Puzzle05Part2) &&
            !this._locationTracker.currentStatus.get(locationNames.Puzzle05Part3)
        );
    }
    
    get complete(): boolean {
        return (
            this._locationTracker.currentStatus.get(locationNames.Puzzle05Part1) &&
            this._locationTracker.currentStatus.get(locationNames.Puzzle05Part2) &&
            this._locationTracker.currentStatus.get(locationNames.Puzzle05Part3)
        );
    }

    returnToMapClicked() {
        this._locationTracker.currentStatus.set(locationNames.Puzzle05, true);
    }
}