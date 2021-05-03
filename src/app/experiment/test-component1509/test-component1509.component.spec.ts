import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1509Component } from './test-component1509.component';

describe('TestComponent1509Component', () => {
  let component: TestComponent1509Component;
  let fixture: ComponentFixture<TestComponent1509Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1509Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1509Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
