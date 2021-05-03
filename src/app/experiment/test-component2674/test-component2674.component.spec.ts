import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2674Component } from './test-component2674.component';

describe('TestComponent2674Component', () => {
  let component: TestComponent2674Component;
  let fixture: ComponentFixture<TestComponent2674Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2674Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2674Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
