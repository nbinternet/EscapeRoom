import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuzzletaxiComponent } from './puzzletaxi.component';

describe('PuzzletaxiComponent', () => {
  let component: PuzzletaxiComponent;
  let fixture: ComponentFixture<PuzzletaxiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuzzletaxiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuzzletaxiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
