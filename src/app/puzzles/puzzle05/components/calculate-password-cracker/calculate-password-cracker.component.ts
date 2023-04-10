import { Component } from '@angular/core';
import { LocationTrackerService } from 'src/app/services/location-tracker.service';
import { locationNames } from 'src/app/models/locationNames';

@Component({
    selector: 'app-calculate-password-cracker',
    templateUrl: './calculate-password-cracker.component.html',
    styleUrls: ['./calculate-password-cracker.component.css']
})
export class CalculatePasswordCrackerComponent {
    strongHoursToCrack: number = 2603303448990007580700309; // Keyspace = 937189241636402729052111114877
    weakHoursToCrack: number = 0.33;
    strongPasswordCrackerCorrect: boolean = false;
    strongPasswordCrackerIncorrect: boolean = false;
    weakPasswordCrackerCorrect: boolean = false;
    weakPasswordCrackerIncorrect: boolean = false;
    complete: boolean = false;

    constructor(private _locationTracker: LocationTrackerService){}

    nextClicked(){
        this._locationTracker.currentStatus.set(locationNames.Puzzle05Part3, true);
    }

    strongPasswordCrackerValue(strongHours: string): void {
        if (+strongHours === this.strongHoursToCrack){
            this.strongPasswordCrackerCorrect = true;
            this.strongPasswordCrackerIncorrect = false;
            this.isComplete();
        }
        else {
            this.strongPasswordCrackerCorrect = false;
            this.strongPasswordCrackerIncorrect = true;
        }
    }

    weakPasswordCrackerValue(weakHours: string): void {
        if (+weakHours === this.weakHoursToCrack){
            this.weakPasswordCrackerCorrect = true;
            this.weakPasswordCrackerIncorrect = false;
            this.isComplete();
        }
        else {
            this.weakPasswordCrackerCorrect = false;
            this.weakPasswordCrackerIncorrect = true;
        }
    }

    isComplete(): void {
        if (this.strongPasswordCrackerCorrect === true && this.weakPasswordCrackerCorrect === true) {
            this.complete = true;
        }
    }
}