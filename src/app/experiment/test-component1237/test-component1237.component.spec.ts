import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1237Component } from './test-component1237.component';

describe('TestComponent1237Component', () => {
  let component: TestComponent1237Component;
  let fixture: ComponentFixture<TestComponent1237Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1237Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1237Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
