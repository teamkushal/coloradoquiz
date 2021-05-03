import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent662Component } from './test-component662.component';

describe('TestComponent662Component', () => {
  let component: TestComponent662Component;
  let fixture: ComponentFixture<TestComponent662Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent662Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent662Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
