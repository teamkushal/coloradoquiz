import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent801Component } from './test-component801.component';

describe('TestComponent801Component', () => {
  let component: TestComponent801Component;
  let fixture: ComponentFixture<TestComponent801Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent801Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent801Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
