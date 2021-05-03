import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1797Component } from './test-component1797.component';

describe('TestComponent1797Component', () => {
  let component: TestComponent1797Component;
  let fixture: ComponentFixture<TestComponent1797Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1797Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1797Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
