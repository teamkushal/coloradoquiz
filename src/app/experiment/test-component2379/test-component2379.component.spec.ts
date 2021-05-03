import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2379Component } from './test-component2379.component';

describe('TestComponent2379Component', () => {
  let component: TestComponent2379Component;
  let fixture: ComponentFixture<TestComponent2379Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2379Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2379Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
