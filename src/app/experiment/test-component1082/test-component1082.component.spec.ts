import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1082Component } from './test-component1082.component';

describe('TestComponent1082Component', () => {
  let component: TestComponent1082Component;
  let fixture: ComponentFixture<TestComponent1082Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1082Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1082Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
