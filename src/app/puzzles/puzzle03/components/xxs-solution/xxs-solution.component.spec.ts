import {ComponentFixture, TestBed} from '@angular/core/testing';

import { XxsSolutionComponent } from './xxs-solution.component';

describe('XxsSolutionComponent', () => {
  let component: XxsSolutionComponent;
  let fixture: ComponentFixture<XxsSolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XxsSolutionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XxsSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});