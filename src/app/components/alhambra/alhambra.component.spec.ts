import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlhambraComponent } from './alhambra.component';

describe('AlhambraComponent', () => {
  let component: AlhambraComponent;
  let fixture: ComponentFixture<AlhambraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlhambraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlhambraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
