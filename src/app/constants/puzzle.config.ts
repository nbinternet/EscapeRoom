import { locationNames } from "../models/locationNames";

export const puzzleConfig: any[] = [
    {
        name: locationNames.Puzzle01,
        route: '/puzzle01',
        complete: false,
        parts: {
            // maybe refactor the way we use location tracker
        }
    },
    {
        name: locationNames.Puzzle02,
        route: '/puzzle02',
        complete: false
    },
    {
        name: locationNames.Puzzle03,
        route: '/puzzle03',
        complete: false
    },
    {
        name: locationNames.Puzzle04,
        route: '/puzzle04',
        complete: false
    },
    {
        name: locationNames.Puzzle05,
        route: '/puzzle05',
        complete: false
    },
    {
        name: locationNames.Puzzle06,
        route: '/puzzle06',
        complete: false
    },
]