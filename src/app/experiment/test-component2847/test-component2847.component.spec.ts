import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2847Component } from './test-component2847.component';

describe('TestComponent2847Component', () => {
  let component: TestComponent2847Component;
  let fixture: ComponentFixture<TestComponent2847Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2847Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2847Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
