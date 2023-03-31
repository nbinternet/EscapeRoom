import { Component } from '@angular/core';
import { LocationTrackerService } from 'src/app/services/location-tracker.service';
import { locationNames } from 'src/app/models/locationNames';

@Component({
    selector: 'app-find-keyspace',
    templateUrl: './find-keyspace.component.html',
    styleUrls: ['./find-keyspace.component.css']
})
export class FindKeyspaceComponent {
    public oldKeyspaceNumber: number = 11881376;
    public strongPasswordKeyspace: number = 18215225100020464195180876374789;
    public strongPasswordKeyspaceScientificNotation: number = 1.8215225100020465+31;
    public stringPassword: string;
    oldKeyspaceCorrect: boolean = false;
    oldKeyspaceIncorrect: boolean = false;
    strongKeyspaceCorrect: boolean = false;
    strongKeyspaceIncorrect: boolean = false;
    complete: boolean = false;
    length: number; 
    
    constructor(
        private _locationTracker: LocationTrackerService
    ) {}

    nextClicked() {
        this._locationTracker.currentStatus.set(locationNames.Puzzle05Part2, true);
    }

    oldKeyspaceValue(keyspace: number): void {
        if(keyspace === this.oldKeyspaceNumber) {
            this.oldKeyspaceCorrect = true;
            this.oldKeyspaceIncorrect = false;
            this.isComplete();
        }
        else {
            this.oldKeyspaceCorrect = false;
            this.oldKeyspaceIncorrect = true;
        }
    }


    strongKeyspaceValue(keyspace: number): void {
        if(keyspace === this.strongPasswordKeyspace || keyspace === this.strongPasswordKeyspaceScientificNotation) {
            this.strongKeyspaceCorrect = true;
            this.strongKeyspaceIncorrect = false;
            this.isComplete();
        }
        else {
            this.strongKeyspaceCorrect = false;
            this.strongKeyspaceIncorrect = true;
        }
    }

    isComplete(): void {
        this.complete = (this.strongKeyspaceCorrect === true && this.oldKeyspaceCorrect === true);
    }
}