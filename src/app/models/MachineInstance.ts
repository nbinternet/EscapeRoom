export class MachineInstance {
    machineName : string;
    machineDetails : string;
    machinePrefix : string;

    constructor() {}

    toString(): string{
        return this.machineDetails;
    }
}