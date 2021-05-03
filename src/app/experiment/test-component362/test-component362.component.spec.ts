import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent362Component } from './test-component362.component';

describe('TestComponent362Component', () => {
  let component: TestComponent362Component;
  let fixture: ComponentFixture<TestComponent362Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent362Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent362Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
