import {ComponentFixture, TestBed} from '@angular/core/testing';

import { FindPhishingVulnerabilitiesComponent } from './find-phishing-vulnerabilities.component';

describe('FindPhishingVulnerabilitiesComponent', () => {
  let component: FindPhishingVulnerabilitiesComponent;
  let fixture: ComponentFixture<FindPhishingVulnerabilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindPhishingVulnerabilitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindPhishingVulnerabilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});