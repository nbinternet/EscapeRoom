import { Component, EventEmitter, Output } from '@angular/core';
import { locationNames } from 'src/app/models/locationNames';
import { LocationTrackerService } from 'src/app/services/location-tracker.service';
import {CountdownEvent} from "ngx-countdown";

@Component({
    selector: 'app-xxs-input-validation',
    templateUrl: './xxs-input-validation.component.html',
    styleUrls: ['./xxs-input-validation.component.css']
})
export class XxsInputValidationComponent {
    public isCorrect = false;
    public isWrong = false;
    showHint: boolean = false;
    config = {
      leftTime: 120, //2 mins
      format: ''
    };

  public description: string =
    `To protect from future cross site scripting attacks like this, Glasgow Science Centre has created the function shown on the right.
    This will encode all query parameters that get passed along with URLs`;

    public questionLabel: string =
    `Can you figure out what the encoded string would be if the function is run with the hackers' malicious script parameter: <script src=”loginnow.js”></script>`;

    public correctMessage =
    `Using a function like this for all URL query parameters means that the parameters will be transformed so that the compiler won't interpret them as
    commands and run the malicious code.
    However, many languages have their own inbuilt encoding functions that do this for you and are often more reliable than a user-written function
    (e.g. encodeURL() in javascript or URLEncoder.encode() in java).
    See the Handbook for more details.`;

    public encodedParam: string =
    `&lt;script%20src=&quot;loginnow.js&quot;&gt;&lt;&#x2F;script&gt;`;

    @Output()
    public solved: EventEmitter<any> = new EventEmitter();

    constructor(private _locationTracker: LocationTrackerService){}

    updateAnswer (option: any) {
        if (option.trim() === this.encodedParam) {
            this.isCorrect = true;
            this.isWrong = false;
            this.showHint = false;
        }else {
            this.isCorrect = false;
            this.isWrong = true;
        }
    }

    nextClicked (){
        this._locationTracker.currentStatus.set(locationNames.Puzzle03Part3, true);
    }

  handleEvent(event: CountdownEvent) {
    if (event.action === 'done'){
      this.showHint = true;
      this.isWrong = false;
    }
  }
}
