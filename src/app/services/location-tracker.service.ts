import {Injectable} from '@angular/core';
import {locationNames} from '../models/locationNames';

@Injectable({
  providedIn: 'root'
})
export class LocationTrackerService {
  public currentStatus = new Map();
  public checkpointMap = new Map();

    constructor() {
      console.info('initilise LocationTrackerService');
      this.currentStatus.set(locationNames.Puzzle01, false);
      this.currentStatus.set(locationNames.Puzzle02, false);
      this.currentStatus.set(locationNames.Puzzle03, false);
      this.currentStatus.set(locationNames.Puzzle04, false);
      this.currentStatus.set(locationNames.Puzzle05, false);
      this.currentStatus.set(locationNames.Puzzle06, false);
      this.currentStatus.set(locationNames.Puzzle01Part1, false);
      this.currentStatus.set(locationNames.Puzzle01Part2, false);
      this.currentStatus.set(locationNames.Puzzle03Part1, false);
      this.currentStatus.set(locationNames.Puzzle03Part2, false);
      this.currentStatus.set(locationNames.Puzzle03Part3, false);
      this.currentStatus.set(locationNames.Puzzle05Part1, false);
      this.currentStatus.set(locationNames.Puzzle05Part2, false);
      this.currentStatus.set(locationNames.Puzzle05Part3, false);
  }

  getPuzzleCheckpointIfApplicable(puzzleName: locationNames): number {
    let checkpoint: number = this.checkpointMap.get(puzzleName);
    if (checkpoint) {
      return checkpoint;
    } else {
      return -1;
    }
  }

  registerCheckpointForPuzzle(puzzleName: locationNames, checkpoint: number): void {
    this.checkpointMap.set(puzzleName, checkpoint);
  }
}
