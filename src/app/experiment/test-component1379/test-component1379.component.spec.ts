import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1379Component } from './test-component1379.component';

describe('TestComponent1379Component', () => {
  let component: TestComponent1379Component;
  let fixture: ComponentFixture<TestComponent1379Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1379Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1379Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
