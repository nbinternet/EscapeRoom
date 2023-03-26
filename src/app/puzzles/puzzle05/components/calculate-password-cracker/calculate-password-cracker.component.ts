import { Component } from "@angular/core";
import { LocationTrackerService } from "src/app/services/location-tracker.service";
import { locationNames } from "src/app/models/locationNames";

@Component({
    selector: 'app-calculate-password-cracker',
    templateUrl: './calculate-password-cracker.component.html',
    styleUrls: ['./calculate-password-cracker.component.css']
})
export class CalculatePasswordCrackerComponent {
    strongHoursToCrack: number = 505978475000568449866135;
    weakHoursToCrack: number = 0.33;
    strongPasswordCrackerCorrect: boolean = false;
    strongPasswordCrackerInCorrect: boolean = false;
    weakPasswordCrackerCorrect: boolean = false;
    weakPasswordCrackerInCorrect: boolean = false;
    complete: boolean = false;

    constructor(private _locationTracker: LocationTrackerService){}

    nextClicked(){
        this._locationTracker.currentStatus.set(locationNames.Puzzle05Part3, true);
    }

    strongPasswordCrackerValue(strongHours: number) : void {
        if(strongHours == this.strongHoursToCrack){
            this.strongPasswordCrackerCorrect = true;
            this.strongPasswordCrackerInCorrect = false;
            this.isComplete();
        }
        else {
            this.strongPasswordCrackerCorrect = false;
            this.strongPasswordCrackerInCorrect = true;
        }
    }

    weakPasswordCrackerValue(weakHours: number) : void {
        if(weakHours == this.weakHoursToCrack){
            this.weakPasswordCrackerCorrect = true;
            this.weakPasswordCrackerInCorrect = false;
            this.isComplete();
        }
        else {
            this.weakPasswordCrackerCorrect = false;
            this.weakPasswordCrackerInCorrect = true;
        }
    }

    isComplete(): void {
        if(this.strongPasswordCrackerCorrect == true && this.weakPasswordCrackerCorrect == true) {
            this.complete = true;
        }
    }
}