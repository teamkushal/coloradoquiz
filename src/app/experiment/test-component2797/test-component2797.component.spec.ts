import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2797Component } from './test-component2797.component';

describe('TestComponent2797Component', () => {
  let component: TestComponent2797Component;
  let fixture: ComponentFixture<TestComponent2797Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2797Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2797Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
