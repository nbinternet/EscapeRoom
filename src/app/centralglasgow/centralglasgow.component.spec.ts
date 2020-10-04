import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralglasgowComponent } from './centralglasgow.component';

describe('CentralglasgowComponent', () => {
  let component: CentralglasgowComponent;
  let fixture: ComponentFixture<CentralglasgowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentralglasgowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CentralglasgowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
