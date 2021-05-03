import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1387Component } from './test-component1387.component';

describe('TestComponent1387Component', () => {
  let component: TestComponent1387Component;
  let fixture: ComponentFixture<TestComponent1387Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1387Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1387Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
