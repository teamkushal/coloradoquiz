import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1472Component } from './test-component1472.component';

describe('TestComponent1472Component', () => {
  let component: TestComponent1472Component;
  let fixture: ComponentFixture<TestComponent1472Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1472Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1472Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
