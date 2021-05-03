import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1662Component } from './test-component1662.component';

describe('TestComponent1662Component', () => {
  let component: TestComponent1662Component;
  let fixture: ComponentFixture<TestComponent1662Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1662Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1662Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
