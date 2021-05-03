import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2943Component } from './test-component2943.component';

describe('TestComponent2943Component', () => {
  let component: TestComponent2943Component;
  let fixture: ComponentFixture<TestComponent2943Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2943Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2943Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
