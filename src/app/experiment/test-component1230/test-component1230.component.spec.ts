import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1230Component } from './test-component1230.component';

describe('TestComponent1230Component', () => {
  let component: TestComponent1230Component;
  let fixture: ComponentFixture<TestComponent1230Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1230Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1230Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
