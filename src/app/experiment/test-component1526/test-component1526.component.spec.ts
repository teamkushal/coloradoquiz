import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1526Component } from './test-component1526.component';

describe('TestComponent1526Component', () => {
  let component: TestComponent1526Component;
  let fixture: ComponentFixture<TestComponent1526Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1526Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1526Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
