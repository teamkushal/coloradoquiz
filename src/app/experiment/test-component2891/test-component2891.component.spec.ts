import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2891Component } from './test-component2891.component';

describe('TestComponent2891Component', () => {
  let component: TestComponent2891Component;
  let fixture: ComponentFixture<TestComponent2891Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2891Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2891Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
