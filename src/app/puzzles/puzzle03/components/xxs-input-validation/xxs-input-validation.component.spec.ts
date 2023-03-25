import {ComponentFixture, TestBed} from '@angular/core/testing';

import { XxsInputValildationComponent } from './xxs-input-validation.component';

describe('XxsInputValildationComponent', () => {
  let component: XxsInputValildationComponent;
  let fixture: ComponentFixture<XxsInputValildationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XxsInputValildationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XxsInputValildationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});