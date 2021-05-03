import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2623Component } from './test-component2623.component';

describe('TestComponent2623Component', () => {
  let component: TestComponent2623Component;
  let fixture: ComponentFixture<TestComponent2623Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2623Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2623Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
