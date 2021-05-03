import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2526Component } from './test-component2526.component';

describe('TestComponent2526Component', () => {
  let component: TestComponent2526Component;
  let fixture: ComponentFixture<TestComponent2526Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2526Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2526Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
