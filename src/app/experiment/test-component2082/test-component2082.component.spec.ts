import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2082Component } from './test-component2082.component';

describe('TestComponent2082Component', () => {
  let component: TestComponent2082Component;
  let fixture: ComponentFixture<TestComponent2082Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2082Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2082Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
