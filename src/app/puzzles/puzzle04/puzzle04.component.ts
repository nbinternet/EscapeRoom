import { Component } from '@angular/core';
import { CountdownEvent } from 'ngx-Countdown';
import { locationNames } from 'src/app/models/locationNames';
import { LocationTrackerService } from 'src/app/services/location-tracker.service';
import { TeamDetailsService } from 'src/app/services/team-details.service';
@Component({
    selector: 'app-puzzle04',
    templateUrl: './puzzle04.component.html',
    styleUrls: ['./puzzle04.component.css']
})
export class Puzzle04Component {
    answer: string;
    correctAnswer: boolean = false;
    showHint: boolean = false;
    incorrect: boolean = false;

    constructor(private _teamDetailsService: TeamDetailsService, private _locationTracker: LocationTrackerService){
    }

    puzzleComplete() {
        this._locationTracker.currentStatus.set(locationNames.Puzzle04, true);
    }

    update(value: string) {
        this.answer = value;
        if (value === "password-config"){
            this.correctAnswer = true;
            this.incorrect= false;
            this.showHint = false;
        } else {
            this._teamDetailsService.decrementScore();
            this.incorrect = true;
        }
    }

    handleEvent(event: CountdownEvent) {
        if(event.action === "done") {
            this.showHint = true;
            this.incorrect = false;
        }
    }
}