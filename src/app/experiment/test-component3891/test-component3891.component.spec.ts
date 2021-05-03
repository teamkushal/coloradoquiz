import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3891Component } from './test-component3891.component';

describe('TestComponent3891Component', () => {
  let component: TestComponent3891Component;
  let fixture: ComponentFixture<TestComponent3891Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3891Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3891Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
