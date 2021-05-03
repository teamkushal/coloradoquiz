import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1776Component } from './test-component1776.component';

describe('TestComponent1776Component', () => {
  let component: TestComponent1776Component;
  let fixture: ComponentFixture<TestComponent1776Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1776Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1776Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
