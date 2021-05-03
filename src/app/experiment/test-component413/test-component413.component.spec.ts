import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent413Component } from './test-component413.component';

describe('TestComponent413Component', () => {
  let component: TestComponent413Component;
  let fixture: ComponentFixture<TestComponent413Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent413Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent413Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
