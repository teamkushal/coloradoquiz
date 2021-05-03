import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent430Component } from './test-component430.component';

describe('TestComponent430Component', () => {
  let component: TestComponent430Component;
  let fixture: ComponentFixture<TestComponent430Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent430Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent430Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
