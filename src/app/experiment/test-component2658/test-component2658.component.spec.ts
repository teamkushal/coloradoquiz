import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2658Component } from './test-component2658.component';

describe('TestComponent2658Component', () => {
  let component: TestComponent2658Component;
  let fixture: ComponentFixture<TestComponent2658Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2658Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2658Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
