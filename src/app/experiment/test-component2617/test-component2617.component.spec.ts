import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2617Component } from './test-component2617.component';

describe('TestComponent2617Component', () => {
  let component: TestComponent2617Component;
  let fixture: ComponentFixture<TestComponent2617Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2617Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2617Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
