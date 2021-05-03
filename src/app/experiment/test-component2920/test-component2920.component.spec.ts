import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2920Component } from './test-component2920.component';

describe('TestComponent2920Component', () => {
  let component: TestComponent2920Component;
  let fixture: ComponentFixture<TestComponent2920Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2920Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2920Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
