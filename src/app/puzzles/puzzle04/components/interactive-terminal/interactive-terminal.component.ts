import { Component, OnInit } from '@angular/core';
import { File } from 'src/app/models/file';
import { FileService } from 'src/app/services/file.service';

@Component({
    selector: 'app-interactive-terminal',
    templateUrl: './interactive-terminal.component.html',
    styleUrls: ['./interactive-terminal.component.css']
})
export class InteractiveTerminalComponent implements OnInit {
    currentOutput: string = '';
    currentFile: File;
    topLevelFile: File;

    constructor(private fileService: FileService){}

    ngOnInit(): void {
        this.currentFile = this.fileService.generateMockFiles();
    }

    getMachineOutput(): string {
        return this.currentOutput;
    }

    getCurrentDirectory(): string {
        return this.currentFile.getPath();
    }

    processCommand(input: string): void {
        if (input) {
            let inputSplit: string[] = input.split(' ');
            if (inputSplit.length > 2){
                this.currentOutput = 'Invalid Input';
            }
            let command: string = inputSplit[0];
            let param: string = inputSplit.length === 2 ? inputSplit[1] : null;

            if (command === "cd") {
                this.changeDirectory(param);
            } else if (command === 'ls') {
                if (param != null && param !== '-lart') {
                    this.currentOutput = 
                    'Unrecognized parameter passed for ls command, did you mean -lart?';
                } else {
                    this.getListDir(param !== null);
                }
            } else {
                this.currentOutput = 'Invalid input';
            }
        } else {
            this.currentOutput = 'Invalid input';
        }
    }

    changeDirectory(param: string) {
        //No param passed, gets current directory
        if (param === null) {
            this.currentOutput = this.getCurrentDirectory();
            return;
        }
        // cd .. passed, navigate to parent directory
        if (param === '..') {
            if (this.currentFile.parent === null) {
                this.currentOutput = 'No parent directory exists';
                return;
            } else {
                this.currentFile = this.currentFile.parent;
                return;
            }
        }
        // cd <folder> passed, navigate to folder
        for (const file of this.currentFile.subFiles) {
            if (file.name === param) {
                if (file.type === 'folder') {
                    this.currentFile = file;
                    this.currentOutput = '';
                    return;
                } else {
                    this.currentOutput = 'Cannot change directory to a file';
                    return;
                }
            }
        }
        this.currentOutput = 'Directory not found';
    }

    getListDir(lart: boolean): void {
        let output: string = '';
        for (const file of this.currentFile.subFiles) {
            if (lart) {
                output = output + file.fullOutput() + '\n';
            } else {
                output = output + file.name + '\n';
            }
        }
        this.currentOutput = output;
    }
}