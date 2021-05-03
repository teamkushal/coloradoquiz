import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2662Component } from './test-component2662.component';

describe('TestComponent2662Component', () => {
  let component: TestComponent2662Component;
  let fixture: ComponentFixture<TestComponent2662Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2662Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2662Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
