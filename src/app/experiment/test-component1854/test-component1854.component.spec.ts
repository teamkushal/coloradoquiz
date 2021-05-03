import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1854Component } from './test-component1854.component';

describe('TestComponent1854Component', () => {
  let component: TestComponent1854Component;
  let fixture: ComponentFixture<TestComponent1854Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1854Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1854Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
