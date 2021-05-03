import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1470Component } from './test-component1470.component';

describe('TestComponent1470Component', () => {
  let component: TestComponent1470Component;
  let fixture: ComponentFixture<TestComponent1470Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1470Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1470Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
