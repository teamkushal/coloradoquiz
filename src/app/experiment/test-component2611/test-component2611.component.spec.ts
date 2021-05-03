import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2611Component } from './test-component2611.component';

describe('TestComponent2611Component', () => {
  let component: TestComponent2611Component;
  let fixture: ComponentFixture<TestComponent2611Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2611Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2611Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
