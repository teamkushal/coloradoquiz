import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2411Component } from './test-component2411.component';

describe('TestComponent2411Component', () => {
  let component: TestComponent2411Component;
  let fixture: ComponentFixture<TestComponent2411Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2411Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2411Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
