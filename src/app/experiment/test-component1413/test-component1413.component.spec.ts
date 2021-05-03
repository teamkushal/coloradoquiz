import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1413Component } from './test-component1413.component';

describe('TestComponent1413Component', () => {
  let component: TestComponent1413Component;
  let fixture: ComponentFixture<TestComponent1413Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1413Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1413Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
