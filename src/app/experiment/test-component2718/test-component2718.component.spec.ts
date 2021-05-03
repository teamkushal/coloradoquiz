import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2718Component } from './test-component2718.component';

describe('TestComponent2718Component', () => {
  let component: TestComponent2718Component;
  let fixture: ComponentFixture<TestComponent2718Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2718Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2718Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
