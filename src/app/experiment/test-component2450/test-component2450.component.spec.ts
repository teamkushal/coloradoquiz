import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2450Component } from './test-component2450.component';

describe('TestComponent2450Component', () => {
  let component: TestComponent2450Component;
  let fixture: ComponentFixture<TestComponent2450Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2450Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2450Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
