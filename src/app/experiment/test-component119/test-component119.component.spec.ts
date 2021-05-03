import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent119Component } from './test-component119.component';

describe('TestComponent119Component', () => {
  let component: TestComponent119Component;
  let fixture: ComponentFixture<TestComponent119Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent119Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent119Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
