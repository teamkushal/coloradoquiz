import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent205Component } from './test-component205.component';

describe('TestComponent205Component', () => {
  let component: TestComponent205Component;
  let fixture: ComponentFixture<TestComponent205Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent205Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent205Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
