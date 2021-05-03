import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1866Component } from './test-component1866.component';

describe('TestComponent1866Component', () => {
  let component: TestComponent1866Component;
  let fixture: ComponentFixture<TestComponent1866Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1866Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1866Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
