import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent264Component } from './test-component264.component';

describe('TestComponent264Component', () => {
  let component: TestComponent264Component;
  let fixture: ComponentFixture<TestComponent264Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent264Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent264Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
