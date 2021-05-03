import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1487Component } from './test-component1487.component';

describe('TestComponent1487Component', () => {
  let component: TestComponent1487Component;
  let fixture: ComponentFixture<TestComponent1487Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1487Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1487Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
