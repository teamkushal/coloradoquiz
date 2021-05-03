import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2205Component } from './test-component2205.component';

describe('TestComponent2205Component', () => {
  let component: TestComponent2205Component;
  let fixture: ComponentFixture<TestComponent2205Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2205Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2205Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
