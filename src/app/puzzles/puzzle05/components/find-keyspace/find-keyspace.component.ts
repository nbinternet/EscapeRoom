import { Component } from '@angular/core';
import { LocationTrackerService } from 'src/app/services/location-tracker.service';
import { locationNames } from 'src/app/models/locationNames';
import {CountdownEvent} from "ngx-countdown";

@Component({
    selector: 'app-find-keyspace',
    templateUrl: './find-keyspace.component.html',
    styleUrls: ['./find-keyspace.component.css']
})
export class FindKeyspaceComponent {
    public oldKeyspace: number = 11881376;
    public strongPasswordKeyspace: number =  93718924163640272905211111487177;
    public strongPasswordKeyspaceScientificNotation: number = 9.3718924163640272905211111487177e+32; //87^17  (26 (lowercase letters) + 26 (uppercase letters) + 10 (digits) + 25 (special charcters)) ^ 17 (password length) 
    public strongPasswordKeyspaceScientificNotation1: number = 9.3718924e+32;
    public stringPassword: string;
    oldKeyspaceCorrect: boolean = false;
    oldKeyspaceIncorrect: boolean = false;
    strongKeyspaceCorrect: boolean = false;
    strongKeyspaceIncorrect: boolean = false;
    complete: boolean = false;
    length: number;
    showHint: boolean = false;
    config = {
      leftTime: 120, //2 mins
      format: ''
    };

  constructor(
        private _locationTracker: LocationTrackerService
    ) {}

    nextClicked() {
        this._locationTracker.currentStatus.set(locationNames.Puzzle05Part2, true);
    }

    oldKeyspaceValue(keyspace: string): void {
        if(+keyspace === this.oldKeyspace) {
            this.oldKeyspaceCorrect = true;
            this.oldKeyspaceIncorrect = false;
            this.isComplete();
        }
        else {
            this.oldKeyspaceCorrect = false;
            this.oldKeyspaceIncorrect = true;
        }
    }


    strongKeyspaceValue(keyspace: string): void {
        if(+keyspace === this.strongPasswordKeyspace || +keyspace === this.strongPasswordKeyspaceScientificNotation || +keyspace === this.strongPasswordKeyspaceScientificNotation1) {
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

  handleEvent(event: CountdownEvent) {
    if (event.action === 'done'){
      this.showHint = true;
    }
  }
}
