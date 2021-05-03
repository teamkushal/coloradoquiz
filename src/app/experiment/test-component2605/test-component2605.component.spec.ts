import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2605Component } from './test-component2605.component';

describe('TestComponent2605Component', () => {
  let component: TestComponent2605Component;
  let fixture: ComponentFixture<TestComponent2605Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2605Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2605Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
