import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1644Component } from './test-component1644.component';

describe('TestComponent1644Component', () => {
  let component: TestComponent1644Component;
  let fixture: ComponentFixture<TestComponent1644Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1644Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1644Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
