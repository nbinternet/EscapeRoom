import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PuzzlescienceComponent} from './puzzlescience.component';

describe('PuzzlescienceComponent', () => {
  let component: PuzzlescienceComponent;
  let fixture: ComponentFixture<PuzzlescienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PuzzlescienceComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuzzlescienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
