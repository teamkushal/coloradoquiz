import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent827Component } from './test-component827.component';

describe('TestComponent827Component', () => {
  let component: TestComponent827Component;
  let fixture: ComponentFixture<TestComponent827Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent827Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent827Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
