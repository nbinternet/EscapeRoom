import { Component } from '@angular/core';
import { LocationTrackerService} from ''../../services/location-tracker.service';

@Component({
    selector: 'app-map',
    templateUrl: '.map.component.html',
    styleUrls: ['./map.component.css']
})
export class MapComponent {
    constructor(public locationTracker: LocationTrackerService){}

    inCompleted(puzzle: string): boolean {
        return this.locationTracker.currentStatus.get(puzzle);
    }

    allPuzzlesCompleted(): boolean {
        let allComplete: boolean = true;
        this.locationTracker.currentStatus.forEach((complete: boolean) => {
            if (!complete) {
                allComplete = false;
                return;
            }
        })
        return allComplete;
    }
}