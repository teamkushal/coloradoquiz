import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2520Component } from './test-component2520.component';

describe('TestComponent2520Component', () => {
  let component: TestComponent2520Component;
  let fixture: ComponentFixture<TestComponent2520Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2520Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2520Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
