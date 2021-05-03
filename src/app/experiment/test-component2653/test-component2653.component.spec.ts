import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2653Component } from './test-component2653.component';

describe('TestComponent2653Component', () => {
  let component: TestComponent2653Component;
  let fixture: ComponentFixture<TestComponent2653Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2653Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2653Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
