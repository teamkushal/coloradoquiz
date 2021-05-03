import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1414Component } from './test-component1414.component';

describe('TestComponent1414Component', () => {
  let component: TestComponent1414Component;
  let fixture: ComponentFixture<TestComponent1414Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1414Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1414Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
