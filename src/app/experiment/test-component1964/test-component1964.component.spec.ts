import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1964Component } from './test-component1964.component';

describe('TestComponent1964Component', () => {
  let component: TestComponent1964Component;
  let fixture: ComponentFixture<TestComponent1964Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1964Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1964Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
