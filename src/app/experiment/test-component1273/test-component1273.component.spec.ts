import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1273Component } from './test-component1273.component';

describe('TestComponent1273Component', () => {
  let component: TestComponent1273Component;
  let fixture: ComponentFixture<TestComponent1273Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1273Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1273Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
