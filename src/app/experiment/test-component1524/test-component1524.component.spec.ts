import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1524Component } from './test-component1524.component';

describe('TestComponent1524Component', () => {
  let component: TestComponent1524Component;
  let fixture: ComponentFixture<TestComponent1524Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1524Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1524Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
