import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent526Component } from './test-component526.component';

describe('TestComponent526Component', () => {
  let component: TestComponent526Component;
  let fixture: ComponentFixture<TestComponent526Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent526Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent526Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
