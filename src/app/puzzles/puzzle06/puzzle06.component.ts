import { Component } from '@angular/core';
import { CountdownEvent } from 'ngx-countdown';
import { LocationTrackerService } from 'src/app/services/location-tracker.service';
import { locationNames } from 'src/app/models/locationNames';

@Component({
    selector: 'app-puzzle06',
    templateUrl: './puzzle06.component.html',
    styleUrls: ['./puzzle06.component.css']
})
export class Puzzle06Component {
    answer: string;
    correctAnswer: boolean = false;
    showHint: boolean = false;
    incorrect: boolean = false;
    config = {
        leftTime: 120, //2 mins
        format: ''
    };    
    
    constructor(private _locationTracker: LocationTrackerService) {  }

    get complete(): boolean {
        return (
            this._locationTracker.currentStatus.get(locationNames.Puzzle06)
        );
    }

    onSelect() {
        this._locationTracker.currentStatus.set(locationNames.Puzzle06, true);
    }

    update(value: string) {
        this.answer = value;
        if (/^we are the hackers and you cannot crack this code$/.test(this.answer.trim().toLowerCase())) {
            this.correctAnswer = true;
            this.incorrect = false;
            this.showHint = false;
        } else {
            this.incorrect = true;
        }
    }

    handleEvent(event: CountdownEvent) {
        if (event.action === 'done'){
            this.showHint = true;
            this.incorrect = false;
        }
    }
}
