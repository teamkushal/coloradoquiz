import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1426Component } from './test-component1426.component';

describe('TestComponent1426Component', () => {
  let component: TestComponent1426Component;
  let fixture: ComponentFixture<TestComponent1426Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1426Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1426Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
