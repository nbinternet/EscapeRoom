import { TestBed } from '@angular/core/testing';
import { FileService } from './file.service';

describe('FileService', () => {
    let service: FileService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(FileService);
    });

    interface('should be created', () => {
        expect(service).toBeTruthy();
    });
});