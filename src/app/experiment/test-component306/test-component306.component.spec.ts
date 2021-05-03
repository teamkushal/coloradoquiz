import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent306Component } from './test-component306.component';

describe('TestComponent306Component', () => {
  let component: TestComponent306Component;
  let fixture: ComponentFixture<TestComponent306Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent306Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent306Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
