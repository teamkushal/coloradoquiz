import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2637Component } from './test-component2637.component';

describe('TestComponent2637Component', () => {
  let component: TestComponent2637Component;
  let fixture: ComponentFixture<TestComponent2637Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2637Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2637Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
