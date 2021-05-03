import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2661Component } from './test-component2661.component';

describe('TestComponent2661Component', () => {
  let component: TestComponent2661Component;
  let fixture: ComponentFixture<TestComponent2661Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2661Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2661Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
