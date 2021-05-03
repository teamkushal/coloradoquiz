import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3379Component } from './test-component3379.component';

describe('TestComponent3379Component', () => {
  let component: TestComponent3379Component;
  let fixture: ComponentFixture<TestComponent3379Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3379Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3379Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
