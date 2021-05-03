import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2510Component } from './test-component2510.component';

describe('TestComponent2510Component', () => {
  let component: TestComponent2510Component;
  let fixture: ComponentFixture<TestComponent2510Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2510Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2510Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
