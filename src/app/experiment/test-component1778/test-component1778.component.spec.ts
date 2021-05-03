import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1778Component } from './test-component1778.component';

describe('TestComponent1778Component', () => {
  let component: TestComponent1778Component;
  let fixture: ComponentFixture<TestComponent1778Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1778Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1778Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
