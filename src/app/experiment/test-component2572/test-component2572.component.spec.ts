import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2572Component } from './test-component2572.component';

describe('TestComponent2572Component', () => {
  let component: TestComponent2572Component;
  let fixture: ComponentFixture<TestComponent2572Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2572Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2572Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
