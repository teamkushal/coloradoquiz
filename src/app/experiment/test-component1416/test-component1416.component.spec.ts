import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1416Component } from './test-component1416.component';

describe('TestComponent1416Component', () => {
  let component: TestComponent1416Component;
  let fixture: ComponentFixture<TestComponent1416Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1416Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1416Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
