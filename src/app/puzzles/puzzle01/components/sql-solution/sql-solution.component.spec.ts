import {ComponentFixture, TestBed} from '@angular/core/testing';
import { SqlSolutionComponent } from './sql-solution.component';

describe('SqlSolutionComponent', () => {
  let component: SqlSolutionComponent;
  let fixture: ComponentFixture<SqlSolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SqlSolutionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SqlSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});