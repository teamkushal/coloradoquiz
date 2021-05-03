import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1919Component } from './test-component1919.component';

describe('TestComponent1919Component', () => {
  let component: TestComponent1919Component;
  let fixture: ComponentFixture<TestComponent1919Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1919Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1919Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
