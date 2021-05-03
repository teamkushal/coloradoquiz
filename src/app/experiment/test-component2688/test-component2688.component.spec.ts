import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2688Component } from './test-component2688.component';

describe('TestComponent2688Component', () => {
  let component: TestComponent2688Component;
  let fixture: ComponentFixture<TestComponent2688Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2688Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2688Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
