import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1089Component } from './test-component1089.component';

describe('TestComponent1089Component', () => {
  let component: TestComponent1089Component;
  let fixture: ComponentFixture<TestComponent1089Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1089Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1089Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
