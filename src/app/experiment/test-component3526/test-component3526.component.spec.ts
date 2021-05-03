import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3526Component } from './test-component3526.component';

describe('TestComponent3526Component', () => {
  let component: TestComponent3526Component;
  let fixture: ComponentFixture<TestComponent3526Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3526Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3526Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
