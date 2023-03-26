import { Component } from "@angular/core";
import { locationNames } from "src/app/models/locationNames";
import { LocationTrackerService } from "src/app/services/location-tracker.service";
import { TeamDetailsService } from "src/app/services/team-details.service";

@Component({
    selector: 'app-puzzle03',
    templateUrl: './puzzle03.component.html',
    styleUrls: ['./puzzle03.component.css']
})
export class Puzzle03Component {
    
    constructor(
        private _teamDetailsService: TeamDetailsService,
        private _locationTracker: LocationTrackerService
    ){}

    get showPt1(): boolean {
        return (
            !this._locationTracker.currentStatus.get(locationNames.Puzzle03Part1) &&
            !this._locationTracker.currentStatus.get(locationNames.Puzzle03Part2) &&
            !this._locationTracker.currentStatus.get(locationNames.Puzzle03Part3)
        );
    }

    get showPt2(): boolean {
        return (
            this._locationTracker.currentStatus.get(locationNames.Puzzle03Part1) &&
            !this._locationTracker.currentStatus.get(locationNames.Puzzle03Part2) &&
            !this._locationTracker.currentStatus.get(locationNames.Puzzle03Part3)
        );
    }
    
    get showPt3(): boolean {
        return (
            this._locationTracker.currentStatus.get(locationNames.Puzzle03Part1) &&
            this._locationTracker.currentStatus.get(locationNames.Puzzle03Part2) &&
            !this._locationTracker.currentStatus.get(locationNames.Puzzle03Part3)
        );
    }
    get complete(): boolean {
        return (
            this._locationTracker.currentStatus.get(locationNames.Puzzle03Part1) &&
            this._locationTracker.currentStatus.get(locationNames.Puzzle03Part2) &&
            this._locationTracker.currentStatus.get(locationNames.Puzzle03Part3)
        );
    }

    returnToMapClicked() {
        this._locationTracker.currentStatus.set(locationNames.Puzzle03, true)
    }
}
