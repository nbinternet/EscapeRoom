import { Injectable } from '@angular/core';
import { timer } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class TimerControlService {
  public isRunning: boolean = false;
  private _time: number = 0;

    constructor() {
      timer(0, 1000).subscribe(() => {
        if (this.isRunning){
          this._time++;
        }
      });
  }

  get displayTime() {
    let hours = Math.floor(this._time / 3600);
    let minutes = Math.floor(this._time / 60) % 60;
    let seconds = this._time % 60;

    let hourString = hours < 10 ? `0${hours}` : hours;
    let minutesString = minutes < 10 ? `0${minutes}` : minutes;
    let secondsString = seconds < 10 ? `0${seconds}` : seconds;

    return `${hourString}:${minutesString}:${secondsString}`;
  }

  start() {
    this.isRunning = true;
  }

  stop() {
    this.isRunning = false;
  }

  reset() {
    this.stop();
    this._time = 0;
  }  
}
