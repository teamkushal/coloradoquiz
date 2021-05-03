import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2524Component } from './test-component2524.component';

describe('TestComponent2524Component', () => {
  let component: TestComponent2524Component;
  let fixture: ComponentFixture<TestComponent2524Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2524Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2524Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
