import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1405Component } from './test-component1405.component';

describe('TestComponent1405Component', () => {
  let component: TestComponent1405Component;
  let fixture: ComponentFixture<TestComponent1405Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1405Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1405Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
