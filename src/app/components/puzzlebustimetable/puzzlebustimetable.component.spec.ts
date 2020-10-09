import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuzzlebustimetableComponent } from './puzzlebustimetable.component';

describe('PuzzlbustimetableComponent', () => {
  let component: PuzzlebustimetableComponent;
  let fixture: ComponentFixture<PuzzlebustimetableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuzzlebustimetableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuzzlebustimetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
