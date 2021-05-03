import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent509Component } from './test-component509.component';

describe('TestComponent509Component', () => {
  let component: TestComponent509Component;
  let fixture: ComponentFixture<TestComponent509Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent509Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent509Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
