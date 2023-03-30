import {ComponentFixture, TestBed} from '@angular/core/testing';

import { XxsInputValidationComponent } from './xxs-input-validation.component';

describe('XxsInputValidationComponent', () => {
  let component: XxsInputValidationComponent;
  let fixture: ComponentFixture<XxsInputValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XxsInputValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XxsInputValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});