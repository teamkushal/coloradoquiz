import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3082Component } from './test-component3082.component';

describe('TestComponent3082Component', () => {
  let component: TestComponent3082Component;
  let fixture: ComponentFixture<TestComponent3082Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3082Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3082Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
