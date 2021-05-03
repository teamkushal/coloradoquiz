import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2356Component } from './test-component2356.component';

describe('TestComponent2356Component', () => {
  let component: TestComponent2356Component;
  let fixture: ComponentFixture<TestComponent2356Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2356Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2356Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
