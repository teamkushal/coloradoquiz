import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1623Component } from './test-component1623.component';

describe('TestComponent1623Component', () => {
  let component: TestComponent1623Component;
  let fixture: ComponentFixture<TestComponent1623Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1623Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1623Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
