import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3454Component } from './test-component3454.component';

describe('TestComponent3454Component', () => {
  let component: TestComponent3454Component;
  let fixture: ComponentFixture<TestComponent3454Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3454Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3454Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
